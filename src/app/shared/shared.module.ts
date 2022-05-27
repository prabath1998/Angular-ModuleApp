import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';
import { HeaderComponent } from './components/theme/header/header.component';



@NgModule({
  declarations: [
    AlertComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AlertComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
