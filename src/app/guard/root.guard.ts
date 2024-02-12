import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../service/user.service';

export const rootGuard: CanActivateFn = (route, state) => {
  
  const userService = inject(UserService);
  const router = inject(Router);
  
  let isRoot : boolean = userService.isRoot();

  if(isRoot) {
    return true;
  } else {
    router.navigate(['']);
    return false;
  }

};
