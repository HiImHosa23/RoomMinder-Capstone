import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
// Pages go here 
export class NavbarComponent {
  pages = [
    {title: "Dashboard", page: "/dashboard"},
    {title: "Bill Splitter", page: "/billsplitter"},
    {title: "Profile", page: "/profile"}
  ]
}
