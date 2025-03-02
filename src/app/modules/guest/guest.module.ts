import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { GuestRoutingModule } from './guest-routing.module';
import { GuestdashboardComponent } from './guestdashboard/guestdashboard.component';


@NgModule({
  declarations: [
    GuestdashboardComponent
  ],
  imports: [
    CommonModule,
    GuestRoutingModule,
    MatIconModule
  ]
})
export class GuestModule { }
