import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  stateModal: boolean = false;
  toggleSecondComponent() {
    this.stateModal = !this.stateModal;
  }
}
