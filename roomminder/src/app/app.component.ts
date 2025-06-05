import { Component } from '@angular/core';import { ScheduleModule, RecurrenceEditorModule } from '@syncfusion/ej2-angular-schedule';

import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from "./profile/profile.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  imports: [ScheduleModule, RecurrenceEditorModule, RouterOutlet, ProfileComponent, DashboardComponent, NavbarComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'roomminder';
}
