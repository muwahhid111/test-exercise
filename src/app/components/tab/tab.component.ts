import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit{
 // @Output() stateUpdate: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(){}
  
  stateModal: boolean = true;
  
  ngOnInit(): void {
      
  }
  
  
 openModal(){
    this.stateModal = !this.stateModal
  }
  
}
