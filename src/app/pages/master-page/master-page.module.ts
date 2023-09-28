import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterPageComponent } from './master-page.component';
import { MasterPageRoutingModule } from './master-page-routing.module';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    MasterPageComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MasterPageRoutingModule
  ]
})
export class MasterPageModule { }
