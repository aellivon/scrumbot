// ANGULAR MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';

// INSTALLED MODULES
import {DataTableModule} from 'angular-6-datatable';
import { UIRouterModule } from '@uirouter/angular';
import { MyDatePickerModule } from 'mydatepicker';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// IMPORTED FROM PROJECT
import { APP_STATES } from './app.states';
import { AppComponent } from './app.component';
import { CreateTeamComponent } from './components/forms/create-team/create-team.component';
import { JoinTeamComponent } from './components/prompts/join-team/join-team.component';
import { SlackLoginComponent } from './components/prompts/slack-login/slack-login.component';
import { ScrumboardComponent } from './components/containers/scrumboard/scrumboard.component';
import { AvatarComponent } from './components/avatar/avatar.component';
// import { FilterboxComponent } from './components/containers/filterbox/filterbox.component';
// import { UserFilterComponent } from './components/forms/filters/user-filter/user-filter.component';
// import { DateFilterComponent } from './components/forms/filters/date-filter/date-filter.component';
// import { TypeFilterComponent } from './components/forms/filters/type-filter/type-filter.component';
// import { FilterTypePipe } from './pipes/filter-type.pipe';
// import { FilterDatePipe } from './pipes/filter-date.pipe';
// import { FilterUserPipe } from './pipes/filter-user.pipe';


@NgModule({
  declarations: [
    AppComponent,
    JoinTeamComponent,
    CreateTeamComponent,
    SlackLoginComponent,
    ScrumboardComponent,
    AvatarComponent,
    // FilterboxComponent,
    // UserFilterComponent,
    // DateFilterComponent,
    // TypeFilterComponent,
    // FilterTypePipe,
    // FilterDatePipe,
    // FilterUserPipe,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'csrftoken',
      headerName: 'X-CSRFToken',
    }),
    UIRouterModule.forRoot(APP_STATES),
    FormsModule,
    DataTableModule,
    MyDatePickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
