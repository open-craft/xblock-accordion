Getting Started
###############

This project uses `uv`_ to manage Python (3.11) and its dependencies, which are declared in ``pyproject.toml``
and locked in ``uv.lock``. Unless otherwise stated, assume all terminal code below is executed within the
``.venv`` virtualenv that uv creates (or prefixed with ``uv run``).

.. _uv: https://docs.astral.sh/uv/


Install dependencies
********************
Dependencies can be installed via the command below.

.. code-block:: bash

    $ make requirements   # runs `uv sync`

To upgrade the locked dependencies, run ``make upgrade`` (``uv lock --upgrade``).


