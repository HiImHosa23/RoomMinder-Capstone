import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoommatesService {
  private apiURL = 'https://localhost:3001/api/roommates';

  async getTheRoommates(): Promise<any[]> {
    const response = await fetch(this.apiURL);
    return await response.json();
  }
}
