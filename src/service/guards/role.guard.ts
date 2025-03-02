import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
 
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,): boolean {
    const userRole = localStorage.getItem('userRole'); 

    if (!userRole) {
      this.router.navigate(['/login']); 
      return false;
    }

    const allowedRoles = route.data['roles'] as string[]; 

    if (allowedRoles.includes(userRole)) {
      return true; 
    }

    this.router.navigate(['/unauthorized']); 
    return false;
  }
}
