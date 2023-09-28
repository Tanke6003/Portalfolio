import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterPageComponent } from './pages/master-page/master-page.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MasterPageComponent,
    loadChildren: () => import('./pages/master-page/master-page.module').then(m => m.MasterPageModule)
  },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  // },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
