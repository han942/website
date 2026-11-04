#!/usr/bin/env python3
"""Generate the static /kr/ entry point from index_kr.html."""

import argparse
from html.parser import HTMLParser
from pathlib import Path
import re
from urllib.parse import urlsplit


class RoutePage(HTMLParser):
    """Adjust relative URLs without reformatting the source HTML."""

    def __init__(self, source):
        super().__init__(convert_charrefs=False)
        self.lines = source.splitlines(keepends=True)
        self.replacements = []

    def handle_starttag(self, tag, attrs):
        original = self.get_starttag_text()
        updated = original
        for name, value in attrs:
            if name not in {"href", "src"} or not value:
                continue
            url = urlsplit(value)
            if url.scheme or url.netloc or not url.path or value.startswith("/"):
                continue
            updated = re.sub(
                rf'(\b{name}\s*=\s*[\"\']){re.escape(value)}([\"\'])',
                lambda match: match[1] + "../" + value.removeprefix("./") + match[2],
                updated,
            )
        if updated != original:
            line, column = self.getpos()
            offset = sum(map(len, self.lines[:line - 1])) + column
            self.replacements.append((offset, offset + len(original), updated))

    handle_startendtag = handle_starttag


def render(source):
    page = RoutePage(source)
    page.feed(source)
    for start, end, updated in reversed(page.replacements):
        source = source[:start] + updated + source[end:]
    return source.replace(
        "<!DOCTYPE html>\n",
        "<!DOCTYPE html>\n<!-- Generated from index_kr.html by scripts/sync_kr.py. -->\n",
        1,
    )


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true", help="Check without writing")
    args = parser.parse_args()
    root = Path(__file__).resolve().parent.parent
    target = root / "kr" / "index.html"
    expected = render((root / "index_kr.html").read_text(encoding="utf-8"))
    if args.check:
        if not target.exists() or target.read_text(encoding="utf-8") != expected:
            parser.exit(1, "kr/index.html is out of date. Run python3 scripts/sync_kr.py\n")
        print("kr/index.html is up to date.")
    else:
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(expected, encoding="utf-8")
        print("Updated kr/index.html")


if __name__ == "__main__":
    main()
