import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardWorkComponent } from './card-work/card-work.component';


@NgModule({
  declarations: [
    CardWorkComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardWorkComponent
  ]
})
export class SharedComponentsModule { }
