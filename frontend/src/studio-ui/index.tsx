import * as React from 'react';
import * as ReactDOM from 'react-dom';
import StudioUi from './studio-ui';
import './style.scss';

// eslint-disable-next-line import/prefer-default-export
export const renderEditor = (runtime: XBlockRuntime, element: Element | null, {
  panels,
  styling,
}: XBlockData) => {
  const container = element && 'jquery' in element ? element[0] : element;

  if (!container || !(container instanceof Element)) {
    // eslint-disable-next-line no-console
    console.error('Invalid DOM element provided to renderEditor:', element);
    return;
  }

  const studioSaveUrl = runtime.handlerUrl(container, 'studio_save');
  ReactDOM.render(
    (
      <React.StrictMode>
        <StudioUi
          initialPanels={panels}
          initialStyling={styling}
          studioSaveUrl={studioSaveUrl}
          runtime={runtime}
        />
      </React.StrictMode>
    ),
    container,
  );
};
