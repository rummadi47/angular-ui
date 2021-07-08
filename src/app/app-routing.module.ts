import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { CustomerReportComponent } from './customer-report/customer-report.component';

const routes: Routes = [
  { path: '',   redirectTo: '/customersupport', pathMatch: 'full' },
  {path: 'customersupport', component: CustomerSupportComponent},
  {path: 'customerreport', component: CustomerReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
