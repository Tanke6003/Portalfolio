import { Component,OnInit } from '@angular/core';
import { ThemeService } from 'src/app/core/services/theme.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private _themeService:ThemeService) {}
  ngOnInit() {
  }
  getSelectedTheme(){
    return this._themeService.getSelectedTheme();
  }
  changetheme(){
    this._themeService.setTheme(this._themeService.getSelectedTheme() =="dark-theme"?"light-theme":"dark-theme");
  }

}
