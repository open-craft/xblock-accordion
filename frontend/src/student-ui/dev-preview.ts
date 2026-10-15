import { renderBlock } from './index';

renderBlock(document.querySelector('#root'), {
  description: '<h3>About this module</h3><p>Read each section, then expand it.</p>',
  panels: [
    {
      title: 'test',
      contents: '<b>Test</b>',
    }, {
      title: 'test',
      contents: '<b>Test</b>',
    }, {
      // A long title, to check that the expand/collapse icon stays left-aligned
      // with the title beside it when the trigger wraps on a narrow viewport.
      title: 'A deliberately long panel title that wraps onto several lines when '
        + 'the accordion is rendered in a narrow column',
      contents: '<b>Test</b>',
    },
  ],
  styling: {
    backgroundColor: '#001155',
    textColor: '#ffffff',
  },
});
