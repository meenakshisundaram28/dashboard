import { Component, OnInit } from '@angular/core';
import { getFormattedTimestamp } from '../../../../function/timestamp.util';
import { ApiserviceService } from '../../../../service/apiservice.service';

@Component({
  selector: 'app-guestdashboard',
  standalone: false,
  templateUrl: './guestdashboard.component.html',
  styleUrl: './guestdashboard.component.css'
})
export class GuestdashboardComponent implements OnInit {
  lastTimestamp: string = '';
  userRole: string  | null= '' ;
  data:any

  constructor(private api:ApiserviceService){}

  ngOnInit(): void {
    this.lastTimestamp = getFormattedTimestamp()
    this.userRole = this.api.getUser();
    this.userdetails()
  }

  userdetails(){
    this.api.getData().subscribe(response => {
      this.data = response;
      console.log(this.data)
    });
  }

}
