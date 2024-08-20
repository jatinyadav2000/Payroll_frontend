import { Component } from '@angular/core';
import { SidebarService } from '../../../service/sidebar.service';
import { AuthService } from '../../../service/auth.service';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/use.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ MatIconModule,MatToolbarModule, RouterOutlet,FormsModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  username: string | null = 'Guest';

  constructor(
    public authService: AuthService,
     private router: Router) {}

     ngOnInit(): void {
      this.authService.getUsername().subscribe(
        (data) => {
          this.username = data.username;
        },
        (error) => {
          console.error('Error fetching username', error);
        }
      );
    }
    
  // logout(): void {
  //   this.authService.logout();
  //   this.router.navigate(['/login']);
  // }
  signOut() {
    this.authService.logout();
  }
}
