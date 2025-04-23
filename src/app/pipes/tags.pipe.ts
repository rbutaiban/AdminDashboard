import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tags',
  standalone: true
})
export class TagsPipe implements PipeTransform {

  transform(value: string[], ...args: unknown[]): unknown {
    // let tagsArray: string[] =  (<string>value).split(',');
    let tags : string = "";
    value.forEach(element => {
      if(element === 'bestseller')
        tags += '🚀';
      else if(element ==='tech')
        tags += '📱';
      else if(element === 'accessories')
        tags += '🎧';
      else if(element === 'clearance')
        tags += '🏷️';
      else if(element === 'office')
        tags += '💼';
      else if(element === 'ergonomic')
        tags += '😄';
      else if(element === 'clothing')
        tags += '👕';
      else
        tags += element + ", "
    });
    return tags;
  }

}
