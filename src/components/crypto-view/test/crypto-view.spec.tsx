import { newSpecPage } from '@stencil/core/testing';
import { CryptoView } from '../crypto-view';

describe('crypto-view', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CryptoView],
      html: `<crypto-view></crypto-view>`,
    });
    expect(page.root).toEqualHtml(`
      <crypto-view>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </crypto-view>
    `);
  });
});
