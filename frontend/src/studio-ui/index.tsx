import * as React from 'react';
import * as ReactDOM from 'react-dom';
import StudioUi from './studio-ui';
import './style.scss';

// eslint-disable-next-line import/prefer-default-export
export const renderEditor = (runtime: XBlockRuntime, element: Element | null, {
  panels,
  styling,
}: XBlockData) => {
  const studioSaveUrl = runtime.handlerUrl(element, 'studio_save');
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
    element,
  );
};
