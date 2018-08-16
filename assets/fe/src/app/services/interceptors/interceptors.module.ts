import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TokenService } from './token-service.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[TokenService]
})
export class InterceptorsModule { }
