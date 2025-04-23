import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating',
  standalone: true
})
export class RatingPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if(value < 3)
      return 'red'
    return 'grey';
  }

}
