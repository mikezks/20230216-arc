import { Routes } from "@angular/router";

export const BOOKING_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'flight',
        pathMatch: 'full'
      },
      {
        path: 'flight',
        loadChildren: () => import('./flight/flight.module')
          .then(esm => esm.FlightModule)
      }
    ]
  }
];
