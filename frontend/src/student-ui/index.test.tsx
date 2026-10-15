import { describe, expect, it } from 'vitest';
import { renderBlock } from './index';

// These cover the wiring between the block's json_init_args and the rendered
// view. The components are tested directly elsewhere, so without this the
// description could be dropped on the way in unnoticed.
describe('renderBlock', () => {
  it('passes the description through to the student view', () => {
    const container = document.createElement('div');

    renderBlock(container, {
      panels: [],
      styling: {},
      description: '<p>Intro</p>',
    });

    const description = container.querySelector('.accordion-description');
    expect(description).not.toBeNull();
    expect(description?.innerHTML).toBe('<p>Intro</p>');
  });

  it('renders blocks saved before the description existed', () => {
    const container = document.createElement('div');

    renderBlock(container, { panels: [], styling: {} });

    // The view renders, but without a description element.
    expect(container.querySelector('.xblock-accordion')).not.toBeNull();
    expect(container.querySelector('.accordion-description')).toBeNull();
  });
});
