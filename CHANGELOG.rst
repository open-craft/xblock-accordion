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
