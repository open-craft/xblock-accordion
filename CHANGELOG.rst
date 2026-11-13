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

2.1.1 – 2026-11-13
**********************************************

Added
=====

* ``student_view_data`` alias for ``index_dictionary``, so the block's indexed content
  is available to the "Data Bricks" indexer.

2.1.0 – 2026-11-12
**********************************************

Added
=====

* Add support for importing and exporting the XBlock data as JSON in the Studio editor.

Changed
=======

* Make the ``display_name`` value editable.

2.0.0 – 2026-11-04
**********************************************

Changed
=======

* Migrated packaging and dependency management to ``pyproject.toml`` and `uv`_, replacing
  ``setup.py``, ``requirements/*.txt`` and tox.
* Python 3.11 is now the minimum supported version.
* ``XBlock[django]`` is now a declared dependency, in place of ``XBlock``.

Removed
=======

* Support for Django 4.2. Django 5.2 is the only version tested, though the package
  metadata does not enforce a Django version.
* The ``pydantic`` dependency, which the package does not use. Anything relying on
  this package to install ``pydantic`` must now declare it directly.

.. _uv: https://docs.astral.sh/uv/

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
