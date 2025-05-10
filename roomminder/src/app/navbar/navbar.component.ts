import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
// Pages go here 
export class NavbarComponent {
  menuOpen = false;
  toggleMenu(){
    this.menuOpen = !this.menuOpen;
  }
  pages = [
    {title: "Dashboard", page: "/dashboard"},
    {title: "Bill Splitter", page: "/billsplitter"},
    {title: "List Maker", page: "/listmaker"},
    {title: "Chore Assigner", page: "/choreassigner"},
    {title: "Profile", page: "/profile"},
    {title: "Login", page: "/login"},
    {title: "Register", page: "/register"}
  ]
}

