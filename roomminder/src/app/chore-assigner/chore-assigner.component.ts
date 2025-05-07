import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chore-assigner',
  imports: [],
  templateUrl: './chore-assigner.component.html',
  styleUrl: './chore-assigner.component.css'
})
export class ChoreAssignerComponent {
  constructor(private router: Router) {}

  submitChore() {
    const choreInput = (document.querySelector('input[placeholder]') as HTMLInputElement).value;
    const roommate = (document.getElementById('roommate') as HTMLSelectElement).value;
    const date = (document.getElementById('date') as HTMLInputElement).value;
    const priority = (document.getElementById('priority-class') as HTMLSelectElement).value;

    const choreData = {
      chore: choreInput,
      roommate,
      date,
      priority
    };

    console.log('Chore submitted:', choreData);
    this.router.navigate(['/dashboard'], {state: {chore: choreData}});
  }
}
