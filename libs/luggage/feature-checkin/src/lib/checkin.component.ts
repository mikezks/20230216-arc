import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckinFacade } from '@workshop-customizing/luggage/domain';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'luggage-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss'],
})
export class CheckinComponent implements OnInit {
  luggageList$ = this.checkinFacade.luggageList$;

  constructor(private checkinFacade: CheckinFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.checkinFacade.load();
  }
}
