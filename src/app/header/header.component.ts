import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../__services/user-auth.service';
import { Router } from '@angular/router';
import { UserService } from '../__services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(
    private userAuthService: UserAuthService, 
    private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {
    
  }

  // Getter
  public getUserService(): UserService {
    return this.userService;
  }

  public isLoggedIn() {
    return this.userAuthService.isLoggedIn();
  }

  public logOut() {
    this.userAuthService.clearAllTraces();
    this.router.navigate(['/home'])
  }

}
