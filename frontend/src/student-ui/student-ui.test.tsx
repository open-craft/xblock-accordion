import React from 'react';
import {
  beforeEach, describe, expect, it, vi,
} from 'vitest';
import {
  render, screen, waitFor, within,
} from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import StudentUi from './student-ui';

// The toggle icons are replaced with identifiable stand-ins so the tests can tell
// the expand (plus) icon apart from the collapse (minus) one.
vi.mock('@openedx/paragon/icons/es5/Add', () => ({
  __esModule: true,
  default: () => <svg data-testid="plus-icon" />,
}));

vi.mock('@openedx/paragon/icons/es5/Remove', () => ({
  __esModule: true,
  default: () => <svg data-testid="minus-icon" />,
}));

describe('StudentUi', () => {
  let props;

  beforeEach(() => {
    props = {
      panels: [
        {
          title: 'panel title 1',
          contents: 'panel contents 1',
        },
        {
          title: 'panel title 2',
          contents: 'panel contents 2',
        },
        {
          title: 'panel title 3',
          contents: 'panel contents 3',
        },
      ],
      styling: {
        borderColor: '#123123',
        backgroundColor: '#456456',
        textColor: '#789789',
        fontSize: '20px',
      },
    };
  });

  it('can toggle single panel', async () => {
    render(<StudentUi {...props} />);
    expect(screen.queryByText('panel title 1'))
      .toBeDefined();
    expect(screen.queryByText('panel content 1'))
      .toBeNull();

    const button = screen.getByRole('button', { name: 'panel title 1' });
    await userEvent.click(button);

    expect(screen.queryByText('panel content 1'))
      .toBeDefined();
  });

  it('can toggle all panels', async () => {
    render(<StudentUi {...props} />);
    expect(screen.getAllByRole('button', { name: /panel title/ }))
      .toHaveLength(3);
    props.panels.forEach(panel => {
      expect(screen.queryByText(panel.contents))
        .not.toBeInTheDocument();
    });
    await userEvent.click(screen.getByRole('button', { name: 'Expand all' }));
    props.panels.forEach(panel => {
      expect(screen.queryByText(panel.contents))
        .toBeInTheDocument();
    });
    expect(screen.queryByRole('button', { name: 'Expand all' }))
      .toBeNull();
    expect(screen.queryByRole('button', { name: 'Collapse all' }))
      .toBeDefined();
    await userEvent.click(screen.getByRole('button', { name: 'Collapse all' }));
    props.panels.forEach(async (panel) => {
      await waitFor(() => expect(screen.queryByText(panel.contents))
        .not
        .toBeInTheDocument());
    });
  });

  it('shows correct expand and collapse status', async () => {
    render(<StudentUi {...props} />);
    expect(screen.getByRole('button', { name: 'Expand all' })).toBeInTheDocument();
    props.panels.forEach(async (panel) => {
      await userEvent.click(screen.getByRole('button', { name: panel.title }));
    });
    await waitFor(() => expect(screen.queryByRole('button', { name: 'Expand all' })).not.toBeInTheDocument());
    expect(screen.getByRole('button', { name: 'Collapse all' })).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: props.panels[0].title }));
    expect(screen.queryByRole('button', { name: 'Collapse all' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Expand all' })).toBeInTheDocument();
  });

  it('applies the correct styles', () => {
    const { container } = render(<StudentUi {...props} />);

    const card = container.querySelector('.collapsible-card');
    expect(card).toHaveStyle({ borderColor: props.styling.borderColor });

    const trigger = container.querySelector('.collapsible-trigger');
    expect(trigger).toHaveStyle({ backgroundColor: props.styling.backgroundColor });
    expect(trigger).toHaveStyle({ color: props.styling.textColor });
    expect(trigger).toHaveStyle({ fontSize: props.styling.fontSize });
  });

  it('renders the description above the accordion', () => {
    const { container } = render(
      <StudentUi {...props} description="<p>An <strong>intro</strong></p>" />,
    );

    const description = container.querySelector('.accordion-description') as HTMLElement;
    expect(description).toBeInTheDocument();
    expect(description.innerHTML).toBe('<p>An <strong>intro</strong></p>');

    const firstPanel = container.querySelector('.collapsible-card') as Node;
    expect(description.compareDocumentPosition(firstPanel)).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
  });

  it('omits an empty description', () => {
    const { container } = render(<StudentUi {...props} description="   " />);

    expect(container.querySelector('.accordion-description')).not.toBeInTheDocument();
  });

  it('renders no description for blocks saved before the field existed', () => {
    const { container } = render(<StudentUi {...props} />);

    expect(container.querySelector('.accordion-description')).not.toBeInTheDocument();
  });

  it('shows the plus icon when collapsed and the minus icon when expanded', async () => {
    render(<StudentUi {...props} />);
    const trigger = screen.getByRole('button', { name: 'panel title 1' });

    expect(within(trigger).getByTestId('plus-icon')).toBeInTheDocument();
    expect(within(trigger).queryByTestId('minus-icon')).not.toBeInTheDocument();

    await userEvent.click(trigger);

    await waitFor(() => expect(within(trigger).getByTestId('minus-icon')).toBeInTheDocument());
    expect(within(trigger).queryByTestId('plus-icon')).not.toBeInTheDocument();
  });

  it('keeps the toggle icon at the start of the trigger, before the title', () => {
    render(<StudentUi {...props} />);
    const trigger = screen.getByRole('button', { name: 'panel title 1' });

    const title = within(trigger).getByText('panel title 1');
    const icon = within(trigger).getByTestId('plus-icon');

    // The icon comes first and the title grows to fill the row, which is what
    // keeps the icon left-aligned with the title beside it.
    expect(icon.compareDocumentPosition(title)).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
    expect(trigger.firstElementChild as HTMLElement).toContainElement(icon);
  });
});
