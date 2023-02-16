import { CheckinComponent } from '@workshop-customizing/luggage/feature-checkin';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    CheckinComponent
  ],
  selector: 'workshop-customizing-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'luggage';
}
