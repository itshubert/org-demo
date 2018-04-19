import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Org Chart Designer';
  appMenuOpen: Boolean = false;
  leftSideBarMenuOpen: Boolean = false;

  toggleLeftMenu(): void {
    this.leftSideBarMenuOpen = !this.leftSideBarMenuOpen;
  }

  toggleAppMenu(): void {
    this.appMenuOpen = !this.appMenuOpen;
    console.log('Opened App Menu');
  }
}
