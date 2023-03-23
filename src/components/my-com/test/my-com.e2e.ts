import { newE2EPage } from '@stencil/core/testing';

describe('my-com', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-com></my-com>');

    const element = await page.find('my-com');
    expect(element).toHaveClass('hydrated');
  });
});
