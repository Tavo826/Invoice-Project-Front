import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { BasicAuthComponent } from './basic-auth/basic-auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { provideHttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    BasicAuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [provideHttpClient()]
})
export class AuthModule { }
