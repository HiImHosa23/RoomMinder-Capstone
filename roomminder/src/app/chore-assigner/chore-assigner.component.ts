import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chore-assigner',
  imports: [],
  templateUrl: './chore-assigner.component.html',
  styleUrl: './chore-assigner.component.css'
})
export class ChoreAssignerComponent {
  selectedRoommate: string = '';
  showDaForm: boolean = false;

  selectDaRoommate(name: string){
    this.selectedRoommate = name;
    this.showDaForm = true;
  }
  
  submitDaForm(chore: string, date: string, priority: string){
    console.log('Chore was assigned:', {
      to: this.selectedRoommate, chore, date, priority
    });

    alert(`Completed Assignment "${chore} to ${this.selectedRoommate} on ${date}(Priority: ${priority})`);
    this.cancelIt();
  }

  cancelIt(){
    this.showDaForm = false;
    this.selectedRoommate = '';
  }
}
