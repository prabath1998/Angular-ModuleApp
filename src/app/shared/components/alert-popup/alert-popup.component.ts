import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert-popup',
  templateUrl: './alert-popup.component.html',
  styleUrls: ['./alert-popup.component.css']
})
export class AlertPopupComponent implements OnInit {

  @Input() message!:string;
  @Output() close = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onClose(){
    this.close.emit();
    // console.log("clicked");
    
  }

}
