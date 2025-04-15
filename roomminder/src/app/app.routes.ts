import { Routes } from '@angular/router';
import { BillSplitterComponent } from './bill-splitter/bill-splitter.component';
import { DashboardComponent } from './dashboard/dashboard.component';

//Routes to pages will go here!
export const routes: Routes = [
    {path: "", redirectTo: "/dashboard", pathMatch: "full"},
    {path: "dashboard", component: DashboardComponent},
    {path: "billsplitter", component: BillSplitterComponent}
];
