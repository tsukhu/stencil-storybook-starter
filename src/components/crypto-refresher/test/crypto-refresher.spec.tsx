import { newSpecPage } from '@stencil/core/testing';
import { CryptoRefresher } from '../crypto-refresher';

describe('crypto-refresher', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CryptoRefresher],
      html: `<crypto-refresher></crypto-refresher>`,
    });
    expect(page.root).toEqualHtml(`
      <crypto-refresher>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </crypto-refresher>
    `);
  });
});
