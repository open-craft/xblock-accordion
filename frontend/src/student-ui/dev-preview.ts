import { renderBlock } from './index';

renderBlock(document.querySelector('#root'), {
  panels: [
    {
      title: 'test',
      contents: '<b>Test</b>',
    }, {
      title: 'test',
      contents: '<b>Test</b>',
    },
  ],
  styling: {
    backgroundColor: '#001155',
    textColor: '#ffffff',
  },
});
