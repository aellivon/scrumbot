import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterType'
})
export class FilterTypePipe implements PipeTransform {

  transform(value: any, type: any, display: any): any {
      if(!value)
          return value
      if(value.log_type === type){
          return display;
      }
      return '';
  }

}
