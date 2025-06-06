import { Routes } from '@angular/router';
import { BillSplitterComponent } from './bill-splitter/bill-splitter.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ListMakerComponent } from './list-maker/list-maker.component';
import { ChoreAssignerComponent } from './chore-assigner/chore-assigner.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FindRoommatesComponent } from './find-roommates/find-roommates.component';

//Routes to pages will go here!
export const routes: Routes = [
    {path: "", redirectTo: "/dashboard", pathMatch: "full"},
    {path: "dashboard", component: DashboardComponent},
    {path: "billsplitter", component: BillSplitterComponent},
    {path: "listmaker", component: ListMakerComponent},
    {path: "choreassigner", component: ChoreAssignerComponent},
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {path: "findroommates", component: FindRoommatesComponent},
    {path: "profile", component: ProfileComponent}
];
