import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  links = [
    { path: '/pokemon', label: 'POKEMON' },
    { path: '/about', label: 'ABOUT' }
  ]
}
