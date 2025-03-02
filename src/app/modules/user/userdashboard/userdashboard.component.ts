import { Component } from '@angular/core';
import { getFormattedTimestamp } from '../../../../function/timestamp.util';
import { ApiserviceService } from '../../../../service/apiservice.service';
import { Router } from '@angular/router';
import { ThemeserviceService } from '../../../../service/themeservice.service';

@Component({
  selector: 'app-userdashboard',
  standalone: false,
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css'
})
export class UserdashboardComponent {
 lastTimestamp: string = '';
  userRole: string  | null= '' ;
  data:any
  isDarkMode = false;
  id: any;

  constructor(private api:ApiserviceService,private router:Router,private themeService:ThemeserviceService){}

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
