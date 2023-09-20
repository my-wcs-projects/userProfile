import { Component } from '@angular/core';
import { User } from 'src/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  user = new User(
    'Doe',
    'John',
    25,
    '',
    'https://randomuser.me/api/portraits/lego/2.jpg'
  );

  hideAge = false;

  ageVisibility() {
    this.hideAge = !this.hideAge; // Inverse the visibility of age
  }
}
