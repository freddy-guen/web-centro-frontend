import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { UserInfo } from '../store/model/User.model';

export const adminGuard: CanActivateFn = (route, state) => {
  
  const userService = inject(UserService);
  const router = inject(Router);
  
  let isAdmin : boolean = userService.isAdmin();

  if(isAdmin) {
    return true;
  } else {
    router.navigate(['']);
    return false;
  }


};
