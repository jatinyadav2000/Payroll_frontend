import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../models/use.model';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [FormsModule,CommonModule,],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent {
  managers = ['a', 'b', 'c'];
  userData = new User();
employeeId: any;
role: any;
updateForm: any;

isEditMode: boolean = false;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

 
  

  onSubmit(form: NgForm): void {
    if (form.valid) {
      if (this.isEditMode) {
        // Update user
        this.userService.updateUser(this.userData).subscribe(
          (response) => {
            console.log('User updated successfully', response);
            this.router.navigate(['/employees']); // Navigate to a list or detail page
          },
          (error) => {
            console.error('Error updating user', error);
          }
        );
      }
    }
  }
}
