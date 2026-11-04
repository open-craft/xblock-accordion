import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  describe, expect, it, vi,
} from 'vitest';
import Header from './Header';
import { EDITOR_TABS, type StudioTab } from '../constants';

interface HarnessProps {
  initialTitle?: string;
  activeTab?: string;
  tabs?: StudioTab[];
  onTitleChange?: (title: string) => void;
}

function Harness({
  initialTitle = 'My Component',
  activeTab = 'content',
  tabs = EDITOR_TABS,
  onTitleChange = () => {},
}: HarnessProps) {
  const [title, setTitle] = useState(initialTitle);

  return (
    <Header
      activeTab={activeTab}
      tabs={tabs}
      title={title}
      onTitleChange={(nextTitle) => {
        onTitleChange?.(nextTitle);
        setTitle(nextTitle);
      }}
    />
  );
}

describe('Header', () => {
  it('renders the title and every tab', () => {
    render(<Harness />);

    expect(
      screen.getByRole('heading', { name: 'Editing: My Component' }),
    ).toBeInTheDocument();
    EDITOR_TABS.forEach(({ label }) => {
      expect(screen.getByRole('tab', { name: label })).toBeInTheDocument();
    });
  });

  it('marks only the active tab as selected', () => {
    render(<Harness activeTab="settings" />);

    expect(screen.getByRole('tab', { name: 'Settings' })).toHaveAttribute(
      'aria-selected',
      'true',
    );
    expect(screen.getByRole('tab', { name: 'Content' })).toHaveAttribute(
      'aria-selected',
      'false',
    );
  });

  it('only keeps the active tab in the tab order', () => {
    render(<Harness activeTab="json" />);

    expect(screen.getByRole('tab', { name: 'JSON' })).toHaveAttribute(
      'tabindex',
      '0',
    );
    expect(screen.getByRole('tab', { name: 'Content' })).toHaveAttribute(
      'tabindex',
      '-1',
    );
  });

  it('labels the tab list for assistive technology', () => {
    render(<Harness />);

    expect(screen.getByRole('tablist')).toHaveAttribute(
      'aria-label',
      'Editor Sections',
    );
  });

  it('opens an input with the current title when editing starts', async () => {
    const user = userEvent.setup();
    render(<Harness />);

    await user.click(screen.getByRole('button', { name: 'Edit display name' }));

    expect(screen.getByRole('textbox', { name: 'Display name' })).toHaveValue(
      'My Component',
    );
  });
  it('reports title changes and shows them in the heading after Enter', async () => {
    const user = userEvent.setup();
    const onTitleChange = vi.fn();
    render(<Harness onTitleChange={onTitleChange} />);

    await user.click(screen.getByRole('button', { name: 'Edit display name' }));
    const input = screen.getByRole('textbox', { name: 'Display name' });
    await user.clear(input);
    await user.type(input, 'Renamed Component{Enter}');

    expect(onTitleChange).toHaveBeenLastCalledWith('Renamed Component');
    expect(
      screen.getByRole('heading', { name: 'Editing: Renamed Component' }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('textbox', { name: 'Display name' }),
    ).not.toBeInTheDocument();
  });

  it('closes the editor when Escape is pressed', async () => {
    const user = userEvent.setup();
    render(<Harness />);

    await user.click(screen.getByRole('button', { name: 'Edit display name' }));
    await user.click(screen.getByRole('textbox', { name: 'Display name' }));
    await user.keyboard('{Escape}');

    expect(
      screen.getByRole('heading', { name: 'Editing: My Component' }),
    ).toBeInTheDocument();
  });

  it('closes the editor when the input loses focus', async () => {
    const user = userEvent.setup();
    render(<Harness />);

    await user.click(screen.getByRole('button', { name: 'Edit display name' }));
    await user.click(screen.getByRole('textbox', { name: 'Display name' }));
    await user.tab();

    expect(
      screen.getByRole('heading', { name: 'Editing: My Component' }),
    ).toBeInTheDocument();
  });
});
