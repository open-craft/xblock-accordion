Accordion XBlock
#############################

An Open edX XBlock to present content in a foldable accordion.

Installation
************

You can install the XBlock from `PyPi <https://pypi.org/project/xblock-accordion/>`_ using:

.. code-block:: bash

   pip install xblock-accordion

Or install it directly from source:

.. code-block:: bash

    pip install xblock-accordion@git+https://github.com/open-craft/xblock-accordion.git

In Tutor, you can the package to ``OPENEDX_EXTRA_PIP_REQUIREMENTS`` in ``config.yml``.

.. code-block:: yaml

   OPENEDX_EXTRA_PIP_REQUIREMENTS:
   - xblock-accordion
     # Or
   - xblock-accordion@git+https://github.com/open-craft/xblock-accordion.git


Versions
========

+---------------------------+------------------+
| XBlock Version            | Open edX Release |
+===========================+==================+
| 1.2.0                     | Teak or lower    |
+---------------------------+------------------+
| > 2.0.0                   | Ulmo and higher  |
+---------------------------+------------------+

Development
***********

**uv** is used for managing requirements for the project.

* Setup the project env using ``make requirements``.
* Run tests using ``make test``.
* Before commit changes run ``make quality``.
* Add new libraries using ``uv add <package-name>``

See the Makefile for other helper functions.


Testing with Docker
*********************

This XBlock comes with a Docker test environment ready to build, based on the xblock-sdk workbench. To build and run it::

    $ make dev.run

The XBlock SDK Workbench, including this XBlock, will be available on the list of XBlocks at http://localhost:8000

Testing frontend
****************

The frontend code in the XBlock can be tested without the backend running for quicker iteration on the UI.
To do this, just run ``npm run dev`` in the `frontend` folder. This will start a dev server with just the
frontend component. You can open the URL in the terminal and browse to the student or studio components.


Usage
*****

To use the XBlock in a course, you need to ensure that you have ``"accordion"`` in the
**Advanced Modules List** in the Advanced settings page of the course.

Once added there you will be able to add an Accordion block from the **Advanced Modules**
section of blocks.
