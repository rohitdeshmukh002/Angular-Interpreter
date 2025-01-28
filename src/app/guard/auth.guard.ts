import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);

  const isuserlogged = localStorage.getItem('token')
  if(isuserlogged != null){
    return true;
  }else{
    router.navigateByUrl('login');
    return false;
  }
};
