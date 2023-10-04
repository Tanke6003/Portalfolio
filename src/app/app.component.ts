import { Component, OnInit } from "@angular/core";
import { ThemeService } from "./core/services/theme.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "Portalfolio";
  public theme: string = "dark-theme";//"light-theme"//
  constructor(public themeService: ThemeService) {
    this.themeService.setTheme(this.theme);
  }
  ngOnInit(): void {
    
  }
}
