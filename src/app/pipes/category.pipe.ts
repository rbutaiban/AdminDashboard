import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category',
  standalone: true
})
export class CategoryPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (value == 'Electronics')
      return '📱';
    if (value == 'Apparel')
      return '👕';
    if (value == 'Furniture')
      return '🪑';
    return value;
  }

}
