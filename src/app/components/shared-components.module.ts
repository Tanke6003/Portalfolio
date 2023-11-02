import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardWorkComponent } from './card-work/card-work.component';
import { ProgressCircleBarsComponent } from './progress-circle-bars/progress-circle-bars.component';


@NgModule({
  declarations: [
    CardWorkComponent,
    ProgressCircleBarsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardWorkComponent,
    ProgressCircleBarsComponent
  ]
})
export class SharedComponentsModule { }
