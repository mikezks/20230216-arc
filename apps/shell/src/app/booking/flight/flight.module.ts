import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { EditComponent } from './features/edit/edit.component';
import { SearchComponent } from './features/search/search.component';
import { FLIGHT_ROUTES } from './flight.routes';

@NgModule({
  imports: [
     CommonModule,
     RouterModule.forChild(FLIGHT_ROUTES),
     FormsModule,
     ReactiveFormsModule
  ],
  declarations: [
    EditComponent,
    SearchComponent
  ]
})
export class FlightModule { }
