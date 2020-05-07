import { newE2EPage } from '@stencil/core/testing';

describe('main-nav', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<main-nav></main-nav>');

    const element = await page.find('main-nav');
    expect(element).toHaveClass('hydrated');
  });
});
