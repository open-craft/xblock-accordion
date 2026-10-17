Change Log
##########

..
   All enhancements and patches to accordion will be documented
   in this file.  It adheres to the structure of https://keepachangelog.com/ ,
   but in reStructuredText instead of Markdown (for ease of incorporation into
   Sphinx documentation and the PyPI description).

   This project adheres to Semantic Versioning (https://semver.org/).

.. There should always be an "Unreleased" section for changes pending release.

Unreleased
**********

*

1.2.0 – 2026-10-19
**********************************************

Added
=====

* A rich text description field, rendered above the accordion entries and edited
  with TinyMCE in Studio. The description is sanitised to a narrow allowlist of
  tags when it is saved.

Changed
=======

* Accordion entries now expand with a plus icon and collapse with a minus icon,
  in place of the up/down arrows.
* Accordion panels are restyled to the refreshed design: a single centered
  1280px container with a 16px radius, 2px dividers between collapsed rows,
  tinted open rows, 20px titles and updated row spacing. Studio styling is
  applied inline, so the design tokens remain the defaults.
* The "Expand all" / "Collapse all" control is now a text button in the design's
  link blue with an unfold icon, replacing the bordered outline button.

1.1.1 – 2026-07-31
**********************************************

Fixed
=====

* Studio editor not rendering in v2 content libraries (learning-core runtime ``handlerUrl`` compatibility).

Changed
=======

* Search indexing now strips HTML with ``nh3``, dropping script/style contents and decoding entities.

1.1.0 – 2026-07-21
**********************************************

Added
=====

* Content-search (Meilisearch) support: panel titles and contents are indexed via ``index_dictionary``.

Fixed
=====

* Unstyled TinyMCE editor in Studio: skin/content CSS now resolves from the bundle (``skin_url: 'default'``).

0.1.0 – 2024-06-25
**********************************************

Added
=====

* First release on PyPI.
