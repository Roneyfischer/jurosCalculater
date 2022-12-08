import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewIntesrestComponent } from './components/view-intesrest/view-intesrest.component';
import { DrashBoardComponent } from './components/drash-board/drash-board.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { DrashBoardGuard } from './guards/drashBoard/drash-board.guard';
import { TokenValidationComponent } from './components/user/token-validation/token-validation.component';
import { UserComponent } from './components/user/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewIntesrestComponent,
    DrashBoardComponent,
    NavbarComponent,
    LoginComponent,
    TokenValidationComponent,
    UserComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    DrashBoardGuard,
    HttpClientModule,
    UserComponent,
    TokenValidationComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
