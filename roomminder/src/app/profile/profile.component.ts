import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user = {
    name: 'Amy Sinclair',
    email: 'woahemail@example.com',
    profilePic: 'https://i.pinimg.com/474x/bd/af/6d/bdaf6d8fe7871aa0a0fdf89f0587fd69.jpg',
    likes: 'Loves art, music, and gaming.',
    dislikes: 'Messy rooms, loud music, and loud people',
    bio: 'I am nice and I am a tidy person. I like to go out and walk around the city.'
  };

  roommates = [
    {
      name: 'Roommate 1',
      email: 'roommate@example.com',
      profilePic: 'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=',
      bio: 'likes books'
    }
  ];

  selectedRoommate: any = null;

  editProfile(){
    alert('Edit Profile was clicked')
  }

  selectRoommate(roommate:any){
    this.selectedRoommate = roommate;
  }

  closeRoommate(){
    this.selectedRoommate = null;
  }
}
