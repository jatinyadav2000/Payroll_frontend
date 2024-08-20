import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';
import { ViewAllEmployeesComponent } from '../view-all-employees/view-all-employees.component';
import { ViewAllComponent } from '../view-all/view-all.component';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    SidebarComponent,
    MainContentComponent,
    NavbarComponent, 
    RouterModule, 
    UpdateEmployeeComponent,
    ViewAllEmployeesComponent,
    ViewAllComponent,
    ProfileComponent
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
