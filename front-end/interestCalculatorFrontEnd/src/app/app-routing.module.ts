import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrashBoardComponent } from './components/drash-board/drash-board.component';
import { LoginComponent } from './components/login/login.component';
import { ViewIntesrestComponent } from './components/view-intesrest/view-intesrest.component';

const routes: Routes = [
  { path: '', component: ViewIntesrestComponent },
  { path: 'viewInterest', component: ViewIntesrestComponent },
  { path: 'login', component: LoginComponent },
  { path: 'drashBoard', component: DrashBoardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
