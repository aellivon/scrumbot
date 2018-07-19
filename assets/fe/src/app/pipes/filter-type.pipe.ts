import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterType'
})
export class FilterTypePipe implements PipeTransform {

  transform(value: any, type: any): any {
      if(!value)
          return value
      if(value === type){
          return value;
      }
      return '';
  }

}
