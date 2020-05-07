import { newSpecPage } from '@stencil/core/testing';
import { MainNav } from '../main-nav';

describe('main-nav', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MainNav],
      html: `<main-nav></main-nav>`,
    });
    expect(page.root).toEqualHtml(`
      <main-nav>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </main-nav>
    `);
  });
});
