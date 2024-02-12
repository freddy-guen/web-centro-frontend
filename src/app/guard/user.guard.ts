import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../service/user.service';

export const userGuard: CanActivateFn = (route, state) => {

  const userService = inject(UserService);
  const router = inject(Router);
  
  let isUser : boolean = userService.isUser();

  if(isUser) {
    return true;
  } else {
    router.navigate(['']);
    return false;
  }

  
};
