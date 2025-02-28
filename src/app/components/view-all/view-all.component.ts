import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { CommonModule } from '@angular/common';
import { User } from '../models/use.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-all',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './view-all.component.html',
  styleUrl: './view-all.component.css'
})
export class ViewAllComponent {
  users: any[] = [];  // Array to hold the employee data
 
  filteredEmployees: User[] = [];
  searchId: string = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchAllUsers();
  }

  fetchAllUsers(): void {
    this.userService.getAllUser().subscribe(
      data => {
        this.users = data;
        // filtering
        this.filteredEmployees =data
        console.log('Employees:', this.users);
      },
      error => {
        console.error('Error fetching employees:', error);
      }
    );
  }

  // onDelete(id:number){
  //   const isDelete = confirm("äre you sure you want to delete")
  //   if(isDelete){
  //     this.userService.deleteUserById(id).subscribe((res:any)=>{
  //       if(res.result){
  //         this.fetchAllUsers()
  //        }else{
  //         alert(res.message)
  //        }
  //     })
  //   }
  // }
  onDelete(userId: number): void {
    this.userService.deleteUserById(userId).subscribe(
      response => {
        console.log('User deleted:', response);
        // Optionally remove the user from the list or refresh the list
        this.users = this.users.filter(user => user.id !== userId);
      },
      error => {
        console.error('Error deleting user:', error);
      }
    );
  }
// search
onSearch(): void {
  if (this.searchId) {
    this.filteredEmployees = this.users.filter(employee =>
      employee.employeeId && employee.employeeId.toString().includes(this.searchId)
    );
  } else {
    this.filteredEmployees = this.users;
  }
}

}
