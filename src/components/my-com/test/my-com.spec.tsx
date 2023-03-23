import { newSpecPage } from '@stencil/core/testing';
import { MyCom } from '../my-com';

describe('my-com', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyCom],
      html: `<my-com></my-com>`,
    });
    expect(page.root).toEqualHtml(`
      <my-com>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-com>
    `);
  });
});
