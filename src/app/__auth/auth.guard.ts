import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from '../__services/user-auth.service';
import { UserService } from '../__services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(
    private userAuthSerivce: UserAuthService,
    private router: Router,
    private userService: UserService
    ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.userAuthSerivce.getToken() !== null) {
      const role = route.data["roles"] as Array<string>;

      if(role) {
        const match = this.userService.roleMatch(role);
        if(match) {
          return true;
        } else {
          this.router.navigate(['/forbidden']);
          return false;
        }
      }
    }

    this.router.navigate(['/login']);
    return false;

  }

} 