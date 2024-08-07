import * as React from 'react';
import * as ReactDOM from 'react-dom';
import StudentUi from './student-ui';
import './style.scss';

// eslint-disable-next-line import/prefer-default-export
export const renderBlock = (element: Element | null, { panels, styling }: XBlockData) => {
  ReactDOM.render(
    (
      <React.StrictMode>
        <StudentUi panels={panels} styling={styling} />
      </React.StrictMode>
    ),
    element,
  );
};
