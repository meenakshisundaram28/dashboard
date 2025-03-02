import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeserviceService {

  private darkModeClass = 'dark-mode';

  enableDarkMode() {
    document.body.classList.add(this.darkModeClass);
  }

  disableDarkMode() {
    document.body.classList.remove(this.darkModeClass);
  }

  isDarkModeEnabled(): boolean {
    return document.body.classList.contains(this.darkModeClass);
  }
}
