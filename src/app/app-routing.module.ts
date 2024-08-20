// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AdminGuard } from './guard/admin.guard';
import { EmployeeGuard } from './guard/employee.guard';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
  // { path: 'employee', component: EmployeeComponent, canActivate: [EmployeeGuard] },
  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
