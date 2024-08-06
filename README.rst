Accordion XBlock
#############################

Testing with Docker
********************

This XBlock comes with a Docker test environment ready to build, based on the xblock-sdk workbench. To build and run it::

    $ make dev.run

The XBlock SDK Workbench, including this XBlock, will be available on the list of XBlocks at http://localhost:8000

Testing frontend
****************

The frontend code in the XBlock can be tested without the backend running for quicker iteration on the UI.
To do this, just run ``npm run dev`` in the `frontend` folder. This will start a dev server with just the
frontend component. You can open the URL in the terminal and browse to the student or studio components.

Installation
************

You can install the XBlock with the following command:

.. code-block:: bash

    pip install xblock-accordion@git+https://github.com/open-craft/xblock-accordion.git

If using tutor, you can add `xblock-accordion@git+https://github.com/open-craft/xblock-accordion.git` to
`OPENEDX_EXTRA_PIP_REQUIREMENTS` to have the xblock installed on deployment.


Usage
*****

To use the XBlock in a course, you need to ensure that you have "accordion" in the
**Advanced Modules List** in the Advanced settings page of the course.

Once added there you will be able to add an Accordion block from the **Advanced Modules**
section of blocks.
