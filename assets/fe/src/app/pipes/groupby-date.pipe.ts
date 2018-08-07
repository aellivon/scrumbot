import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupbyDate'
})
export class GroupbyDatePipe implements PipeTransform {

  transform(array: Object[], property: string): any {
      if(!array){
          return null;
      }
      
  }

}
