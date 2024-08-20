import { Routes } from '@angular/router';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { ViewAllEmployeesComponent } from './components/view-all-employees/view-all-employees.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { ViewAllComponent } from './components/view-all/view-all.component';
import { HomeComponent } from './components/home/home.component';
import { AdminGuard } from './guard/admin.guard';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
    // { path: 'login', component: LoginComponent },
    // { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
    // { path: '**', redirectTo: '/login' },
 
    // {path:'', component: AdminComponent,
    //   children:[
    //     {path:'create', component: CreateEmployeeComponent},
    //     {path:'update', component: UpdateEmployeeComponent},
    //     {path:'viewAll', component: ViewAllEmployeesComponent},
    //   ]
    // },
    // {path:'all', component: ViewAllComponent},
    {
      path:'',
      redirectTo:'login',
      pathMatch:'full'

  },
  {
      path:'login',
      component:LoginComponent
  },
  {
      path:'',
      component:AdminComponent, canActivate:[AdminGuard],
      children:[
        {path:'home', component: HomeComponent},
        {path:'create', component: CreateEmployeeComponent},
        {path:'update', component: UpdateEmployeeComponent},
        {path:'viewAll', component: ViewAllEmployeesComponent},
        {path:'all', component: ViewAllComponent},
        {path:'profile', component:ProfileComponent}
      ]
  },
  { path: '**', redirectTo: '/login' },
   
];


