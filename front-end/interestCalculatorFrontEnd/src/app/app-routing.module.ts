import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DrashBoardComponent } from './components/drash-board/drash-board.component';
import { LoginComponent } from './components/login/login.component';
import { ViewIntesrestComponent } from './components/view-intesrest/view-intesrest.component';
import { LoginGuard } from './guards/auth/login.guard';
import { DrashBoardGuard } from './guards/drashBoard/drash-board.guard';

const routes: Routes = [
  { path: '', component: ViewIntesrestComponent },
  { path: 'viewInterest', component: ViewIntesrestComponent },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  {
    path: 'drashBoard',
    component: DrashBoardComponent,
    canActivate: [DrashBoardGuard],
  },
  { path: 'app', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
