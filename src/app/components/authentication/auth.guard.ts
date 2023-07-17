import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  createUrlTreeFromSnapshot,
} from '@angular/router';
import { UserService } from '../reactiveForm/user.service';

export const authGuard = (next: ActivatedRouteSnapshot) => {
  

  let value = inject(UserService).isLoggedIn();

  return value ? true :createUrlTreeFromSnapshot(next, ['/', 'login'])

};
// export const Guard = (next: ActivatedRouteSnapshot) => {

//   let value = inject(UserService).isLoggedIn();
//   if(value){
//     return createUrlTreeFromSnapshot(next, ['/'])
//   }
//   return true

// };
