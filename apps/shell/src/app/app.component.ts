import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent, SidebarComponent } from './core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent, SidebarComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
}
