import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productsStatus',
  standalone: true
})
export class ProductsStatusPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if(value === 'out-of-stock')
      return 'red';
    else if(value === 'archived')
      return 'orange';
    else if(value === 'available')
      return 'green';

    return 'grey';
  }

}
