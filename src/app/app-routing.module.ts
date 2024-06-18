import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoudComponent } from './utils/not-foud/not-foud.component';
import { authGuard } from './shared/guard/AuthGuard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'invoice',
    canActivate: [authGuard],
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  {
    path: '**',
    component: NotFoudComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
