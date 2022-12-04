import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewIntesrestComponent } from './components/view-intesrest/view-intesrest.component';

const routes: Routes = [
  { path: 'viewInterest', component: ViewIntesrestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
