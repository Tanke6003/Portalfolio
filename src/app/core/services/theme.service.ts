// theme.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkTheme: boolean = false;

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    localStorage.setItem('isDarkTheme', this.isDarkTheme.toString());
  }
  setTheme(theme: string) {
    this.isDarkTheme = theme == 'dark-theme' ? true : false;
    localStorage.setItem('isDarkTheme', this.isDarkTheme.toString());
  }

    getSelectedTheme() {
    if(this.isDarkTheme)
    {
      return 'dark-theme';
    }
    else
    {
      return 'light-theme';
    }
  }
}
