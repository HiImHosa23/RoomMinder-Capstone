import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-list-maker',
  imports: [],
  templateUrl: './list-maker.component.html',
  styleUrl: './list-maker.component.css'
})
export class ListMakerComponent {
  // Temp list maker
  addItem(){
    const input = document.getElementById('inputItem') as HTMLInputElement;
    const list = document.getElementById('itemList') as HTMLUListElement;

    const value = input.value.trim();
    if(value){
      const li = document.createElement('li');
      li.textContent = value;
      const btn = document.createElement('button');
      btn.textContent = 'Remove';
      btn.classList.add('remove-btn');
      btn.onclick = () => list.removeChild(li);

      li.appendChild(btn);
      list.appendChild(li); 

      input.value = '';
    }
  }
}
