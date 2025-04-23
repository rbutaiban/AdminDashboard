import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userStatus',
  standalone: true
})
export class UserStatusPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if(value === 'banned')
      return 'red';
    else if(value === 'inactive')
      return 'grey';
    else if(value === 'active')
      return 'green';

    return 'grey';
  }

}
