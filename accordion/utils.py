"""Utility functions shared between modules."""
import html
from typing import Union

import nh3


def strip_html(text: str) -> str:
    """Reduce HTML to searchable plain text; script/style contents are dropped."""
    text = (text or "").replace("<", " <")
    return " ".join(html.unescape(nh3.clean(text, tags=set())).split())


# The description is authored in TinyMCE, so its markup is sanitised when it is
# saved: storage and the student view both only see allowlisted markup. The
# allowlist is deliberately narrow (an accordion description is introductory copy)
# and is mirrored by the Studio editor, which only offers these formats and no
# media/link/table controls.
#
# Values written outside studio_save - an OLX import, a content-library copy, or a
# direct field assignment - bypass this and are trusted as-is.

_DESCRIPTION_TAGS = {"p", "strong", "em", "h3", "h4", "br"}
_DESCRIPTION_ATTRIBUTES = {}


def sanitize_description(text: str):
    """Sanitize author-provided description markup before it is stored."""
    return nh3.clean(
        text or "",
        tags=_DESCRIPTION_TAGS,
        attributes=_DESCRIPTION_ATTRIBUTES,
    )


def loc_to_dot_sep(loc: tuple[Union[str, int], ...]) -> str:
    """
    Convert Pyndantic error `loc` tuples into user-friendly string notation.

    >>> loc_to_dot_sep(('panels', 0, 'title',))
    'panels[0].title'
    """
    path = ""
    for i, x in enumerate(loc):
        if isinstance(x, str):
            if i > 0:
                path += "."
            path += x
        elif isinstance(x, int):
            path += f"[{x}]"
        else:
            raise TypeError("Unexpected type")
    return path
