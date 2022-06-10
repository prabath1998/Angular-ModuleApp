import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';
import { HeaderComponent } from './components/theme/header/header.component';
import { AlertPopupComponent } from './components/alert-popup/alert-popup.component';
import { PlaceholderDirective } from './directives/placeholder.directive';





@NgModule({
  declarations: [
    AlertComponent,
    HeaderComponent,
    AlertPopupComponent,
    PlaceholderDirective,
  
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AlertComponent,
    HeaderComponent,
    HeaderComponent,
    AlertPopupComponent,
    PlaceholderDirective,
    
   
  ]
})
export class SharedModule { }
