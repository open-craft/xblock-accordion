import * as React from 'react';
import * as ReactDOM from 'react-dom';
import StudentUi from './student-ui';
import './style.scss';

// eslint-disable-next-line import/prefer-default-export
export const renderBlock = (element: Element | null, { panels, styling }: XBlockData) => {
  // Handle both jQuery objects and DOM elements
  const container = element && 'jquery' in element ? element[0] : element;

  if (!container || !(container instanceof Element)) {
    console.error('Invalid DOM element provided to renderBlock:', element);
    return;
  }

  ReactDOM.render(
    (
      <React.StrictMode>
        <StudentUi panels={panels} styling={styling} />
      </React.StrictMode>
    ),
    container,
  );
};
