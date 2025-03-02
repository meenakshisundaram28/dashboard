import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { UserRoutingModule } from './user-routing.module';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';


@NgModule({
  declarations: [
    UserdashboardComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatIconModule
  ]
})
export class UserModule { }
