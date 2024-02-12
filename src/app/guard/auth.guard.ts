import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../service/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  
  const userService = inject(UserService);
  const router = inject(Router);
  
  let isAuthenticated : boolean = userService.isAuthenticated();

  if(isAuthenticated) {
    return true;
  } else {
    router.navigate(['']);
    return false;
  }
  
};
