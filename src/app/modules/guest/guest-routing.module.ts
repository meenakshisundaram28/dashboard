import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestdashboardComponent } from './guestdashboard/guestdashboard.component';

const routes: Routes = [
    {path:'',component:GuestdashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }
