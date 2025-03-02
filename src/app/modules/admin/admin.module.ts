import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AdminRoutingModule } from './admin-routing.module';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';


@NgModule({
  declarations: [
    AdmindashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule
  ]
})
export class AdminModule { }
