import { Component } from '@angular/core';
import { NbMenuItem, NbSidebarService, NbSidebarState } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'the-ml-website';
  sidebarState: NbSidebarState = 'expanded';
  
  items: NbMenuItem[] = [
    {
      icon: 'home',
      title: 'Home',
      link: '/'
    },
    {
      icon: '',
      title: 'Linear Regression',
      link: '/ml/linear-regression'
    }
   ];
   

  constructor(
    private nbSidebarService: NbSidebarService
  ) { }

  toggle() {
    this.nbSidebarService.toggle(true);
    return false;
  }
}
