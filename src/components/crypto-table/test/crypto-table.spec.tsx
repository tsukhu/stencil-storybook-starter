import { newSpecPage } from '@stencil/core/testing';
import { CryptoTable } from '../crypto-table';

describe('crypto-table', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CryptoTable],
      html: `<crypto-table></crypto-table>`,
    });
    expect(page.root).toEqualHtml(`
      <crypto-table>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </crypto-table>
    `);
  });
});
