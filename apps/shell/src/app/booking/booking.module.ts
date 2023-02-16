import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BOOKING_ROUTES } from "./booking.routes";

@NgModule({
  imports: [
     CommonModule,
     RouterModule.forChild(BOOKING_ROUTES)
  ],
  declarations: [
  ]
})
export class BookingModule { }
