import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserPreferencesService {
        colorPreferences: string = 'Orange';
  constructor() {
// console.log("New Instance created for userpreference service...");

   }
}
