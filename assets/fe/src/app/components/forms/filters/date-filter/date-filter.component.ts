import { Component, OnInit } from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.css']
})
export class DateFilterComponent implements OnInit {

    myDatePickerOptions: IMyDpOptions = {
        dateFormat: 'dd.mm.yyyy',
        width: '150'
    };

    from_model: any = { date: { year: 2018, month: 10, day: 9 } };
    to_model: any = { date: { year: 2018, month: 10, day: 9 } };
 
  constructor() { }

  ngOnInit() {
  }

  setFilter(dateFilterForm: NgForm){
      console.log(dateFilterForm.value.from.date)
      console.log(dateFilterForm.value.to.date)
  }

}
