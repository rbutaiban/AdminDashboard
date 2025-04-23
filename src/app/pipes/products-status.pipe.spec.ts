import { ProductsStatusPipe } from './products-status.pipe';

describe('ProductsStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new ProductsStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
