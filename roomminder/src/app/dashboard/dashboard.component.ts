import { Component } from '@angular/core';
import { CalendarComponent } from '../calendar/calendar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CalendarComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  standalone: true
})
export class DashboardComponent {
  meetings = {
    '2025-06-04': ['Wash laundry', 'Sally birthday', 'Trip to park'],
    '2025-06-05': ['Wash laundry', 'Sally birthday', 'Trip to lake'],
  }
}
