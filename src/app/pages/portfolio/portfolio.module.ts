import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';


@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    SharedComponentsModule
  ]
})
export class PortfolioModule { }
