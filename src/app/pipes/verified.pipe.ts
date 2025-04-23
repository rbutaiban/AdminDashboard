import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'verified',
  standalone: true
})
export class VerifiedPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value)
      return '✔️';
    else
      return '❌';
  }

}
