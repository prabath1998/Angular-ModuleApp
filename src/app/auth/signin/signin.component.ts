import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlertPopupComponent } from 'src/app/shared/components/alert-popup/alert-popup.component';
import { PlaceholderDirective } from 'src/app/shared/directives/placeholder.directive';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit,OnDestroy {

  userName!:string;
  password!:string;
  errorMessage!:any;

  // private subscription!:Subscription;

  private subscription!:Subscription;

  @ViewChild(PlaceholderDirective,{static:false}) alertHost!:PlaceholderDirective;

  constructor(private router:Router) { } 

  ngOnInit(): void {
  }

  login():void{
    if(this.userName == 'prabath' && this.password == '1111'){
      this.router.navigate(['home']);
    }else{
      this.showAlert('Username or Password incorrect..!');
    }
  }

  onPopUpClose():void{
    this.errorMessage = null;
  }

  showAlert(message:string):void{
    const hostViewContainerref = this.alertHost.viewContainerRef;
    const componentRef = hostViewContainerref.createComponent(AlertPopupComponent);
    componentRef.instance.message = message;

    this.subscription = componentRef.instance.close.subscribe(()=>{
      hostViewContainerref.clear();
      this.subscription.unsubscribe();
    })
  }

  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
    this.subscription.unsubscribe();
  }

}
