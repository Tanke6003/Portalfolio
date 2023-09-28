import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    redirectTo:'about-me',
    pathMatch: 'full'
  },
  {
    path:'about-me',
    loadChildren: () => import('../about-me/about-me.module').then(m => m.AboutMeModule)
  },
  {
    path:'portfolio',
    loadChildren: () => import('../portfolio/portfolio.module').then(m => m.PortfolioModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MasterPageRoutingModule { }
