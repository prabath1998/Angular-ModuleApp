import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { AuthBaseComponent } from './auth-base/auth-base.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PlaceholderDirective } from '../shared/directives/placeholder.directive';
import { AlertPopupComponent } from '../shared/components/alert-popup/alert-popup.component';


@NgModule({
  declarations: [
    SigninComponent,
    AuthBaseComponent,
    SignupComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    // PlaceholderDirective,
    
  ],
  entryComponents:[
    AlertPopupComponent
  ]
})
export class AuthModule { }
