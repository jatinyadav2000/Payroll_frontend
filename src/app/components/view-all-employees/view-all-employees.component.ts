import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { UserService } from '../service/user.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../models/use.model';
import { CommonModule } from '@angular/common';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-view-all-employees',
  standalone: true,
  imports: [MatTableModule, FormsModule,CommonModule],
  templateUrl: './view-all-employees.component.html',
  styleUrl: './view-all-employees.component.css'
})
export class ViewAllEmployeesComponent {
  // user: any[] = []
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;
  // constructor(private userService: UserService ) {}
  managers = ['Manager1', 'Manager2', 'Manager3']; // Replace with actual manager data
  // userData = {
  //   employeeId: '',
  //   role: '',
  //   salary: '',
  //   manager: ''
  // };

  userData = new User();
  constructor(private userService: UserService, private http: HttpClient) {}

  onSubmit(form: NgForm): void {
    console.log(this.userData);
    if (form.valid) {
      this.userService.updateUser(this.userData).subscribe(
        (response) => {
          console.log('User updated successfully', response);
          // Optionally, reset the form or display a success message
          form.reset();
        },
        (error) => {
          console.error('Error updating user', error);
          // Optionally, display an error message
        }
      );
    }
  }

  // Method to fetch the current employee data based on ID (if needed)
  fetchEmployeeData(employeeId: number): void {
    this.userService.getUserById(employeeId).subscribe(
      (data) => {
        this.userData = data;
      },
      (error) => {
        console.error('Error fetching employee data', error);
      }
    );
  }

 
}

