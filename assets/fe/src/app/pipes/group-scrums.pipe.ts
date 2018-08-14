import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupScrums'
})
export class GroupScrumsPipe implements PipeTransform {

  transform(scrum: Object[], date: string): any {
      if(!scrum){
          return null;
      }
      const grouped_scrums = scrum.reduce((previous, current)=> {
            var date_index = new Date(current[date]).toLocaleDateString()
            if(!previous[date_index]) {
                previous[date_index] = [current];
            } else {
                previous[date_index].push(current);
            }
            return previous;
        }, {});
      return Object.keys(grouped_scrums).map(date => ({ date, scrums: grouped_scrums[date] }));
  }

}
