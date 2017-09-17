import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutes } from './routes/routes.module';
import { AppComponent } from './app.component';
import { WinnerService } from './winner.service';
import { ErrorComponent } from './error/error.component';
import { WinnersComponent } from './winners/winners.component';
import { WinnerComponent } from './winners/winner/winner.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,  
    ErrorComponent,
    WinnersComponent,
    WinnerComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    HttpModule,
    FormsModule
  ],
  providers: [WinnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
