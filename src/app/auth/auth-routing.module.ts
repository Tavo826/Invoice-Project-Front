import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicAuthComponent } from './basic-auth/basic-auth.component';

const routes: Routes = [
  {
    path: '',
    component: BasicAuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
