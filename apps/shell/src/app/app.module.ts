import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent, SidebarComponent } from './core';
import { APP_ROUTES } from './app.routes';

@NgModule({
   imports: [
      BrowserModule,
      RouterModule.forRoot(APP_ROUTES),
      HttpClientModule,
      NavbarComponent,
      SidebarComponent
   ],
   declarations: [
      AppComponent
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
