import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthBaseComponent } from './auth/auth-base/auth-base.component';

const routes: Routes = [
  {
    path:'',
    component:AuthBaseComponent,
    children:[
      {
        path:'',
        redirectTo:'auth',
        pathMatch:'full'
      },
      {
        path:'auth',
        loadChildren:() => import('./auth/auth.module').then(m => m.AuthModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
