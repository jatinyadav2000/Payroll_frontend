import { Component, createComponent } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/admin/sidebar/sidebar.component';
import { MainContentComponent } from './components/admin/main-content/main-content.component';
import { NavbarComponent } from './components/admin/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { CommonModule } from '@angular/common';
import { AuthService } from './service/auth.service';
import { ViewAllComponent } from './components/view-all/view-all.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public authService: AuthService) {}
  title = 'payroll';
}
