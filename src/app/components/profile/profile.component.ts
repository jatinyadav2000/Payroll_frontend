import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card'; //
import { User } from '../models/use.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatCardModule,FormsModule,CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  
  userData: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUserData().subscribe(
      data => {
        this.userData = data;
      },
      error => {
        console.error('Error fetching profile data', error);
      }
    );
  }

}