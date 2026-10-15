import { renderEditor } from './index';

const mockRuntime: XBlockRuntime = {
  handlerUrl: (e, t) => `${e}-${t}`,
  // eslint-disable-next-line no-console
  notify: (action, data) => console.log(`${action} ${JSON.stringify(data)}`),
};

renderEditor(mockRuntime, document.querySelector('#root'), {
  description: '<p>An <strong>intro</strong> description.</p>',
  panels: [
    {
      title: 'test',
      contents: '<b>Test</b>',
    },
  ],
  styling: {},
});
