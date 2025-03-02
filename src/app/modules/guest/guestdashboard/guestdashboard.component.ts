import { Component, OnInit } from '@angular/core';
import { getFormattedTimestamp } from '../../../../function/timestamp.util';
import { ApiserviceService } from '../../../../service/apiservice.service';
import { ThemeserviceService } from '../../../../service/themeservice.service';
import { Router } from '@angular/router';

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
  isDarkMode = false;
  id: any;

  constructor(private api:ApiserviceService,
    private themeService:ThemeserviceService,
    private router:Router
  ){}

  ngOnInit(): void {
    this.lastTimestamp = getFormattedTimestamp()
    this.userRole = this.api.getUser();
    this.userdetails()
  }

  userdetails(){
    this.api.getData().subscribe(response => {
      this.data = response.filter((item:any)=> item.id === this.id);
      console.log(this.data)
    });
  }

  logout(){
    this.api.logout();
    this.router.navigate(['/logout']);
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      this.themeService.enableDarkMode();
    } else {
      this.themeService.disableDarkMode();
    }
  }

}
