import { Component, Inject} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../models/use.model';
import { CommonModule } from '@angular/common';

import { HttpClient } from '@angular/common/http';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [FormsModule,CommonModule,],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {
  // cities = ['Delhi', 'Mumbai', 'Pune'];
  managers = ['Manager1', 'Manager2', 'Manager3']
 
  userData = new User();
  http= Inject(HttpClient)
  
  constructor(private userService: UserService) {}

  onSubmit(form: NgForm): void {
    console.log(this.userData)
    if (form.valid) {
      this.userService.addUser(this.userData).subscribe(
        (response) => {
          console.log(this.userData)
          console.log('User added successfully', response);
          // Optionally, reset the form or display a success message
          form.reset();
        },
        (error) => {
          console.error('Error adding user', error);
          // Optionally, display an error message
        }
      );
    }
  }
  
}
