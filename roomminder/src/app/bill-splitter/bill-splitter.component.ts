import { Component } from '@angular/core';

@Component({
  selector: 'app-bill-splitter',
  imports: [],
  templateUrl: './bill-splitter.component.html',
  styleUrl: './bill-splitter.component.css'
})

export class BillSplitterComponent {
  theRoommates: string[] = [];

  addARoommate(name: string){
    if(name && !this.theRoommates.includes(name.trim())){
      this.theRoommates.push(name.trim());
    }
  }

  removeDaRoommate(index: number){
    this.theRoommates.splice(index, 1);
  }

  splitEvenly(){

  }

  submitDaBill(){

  }
}
