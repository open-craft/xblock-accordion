import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import StudioUi from './studio-ui';
import './style.scss';

// eslint-disable-next-line import/prefer-default-export
export const renderEditor = (runtime: XBlockRuntime, element: XBlockElementLike, {
  display_name,
  panels,
  styling,
  description,
}: XBlockData, config: XBlockConfig) => {
  const container = element && 'jquery' in element ? element[0] : element;

  if (!container || !(container instanceof Element)) {
    // eslint-disable-next-line no-console
    console.error('Invalid DOM element provided to renderEditor:', element);
    return;
  }

  const studioSaveUrl = runtime.handlerUrl(element, 'studio_save');
  // Prevent showing an empty editor when loading for the first time.
  if (!panels.length) {
    panels.push({ title: '', contents: '' });
  }
  ReactDOM.render(
    (
      <React.StrictMode>
        <IntlProvider locale="en">
          <StudioUi
            initialDisplayName={display_name}
            initialPanels={panels}
            initialStyling={styling}
            initialDescription={description}
            studioSaveUrl={studioSaveUrl}
            runtime={runtime}
            element={element}
            config={config}
          />
        </IntlProvider>
      </React.StrictMode>
    ),
    container,
  );
};
