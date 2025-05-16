import { Component, OnInit } from '@angular/core';
import { RoommatesService } from '../roommates.service';

@Component({
  selector: 'app-find-roommates',
  imports: [],
  templateUrl: './find-roommates.component.html',
  styleUrl: './find-roommates.component.css'
})
export class FindRoommatesComponent implements OnInit{

  constructor(private roommatesService: RoommatesService){}

  ngOnInit(): void {
    
  }
}
