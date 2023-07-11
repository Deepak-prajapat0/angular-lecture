import { AbstractControl } from '@angular/forms';

export class passwordValidators {
  static validCurrentPassword(control: AbstractControl) {
    return new Promise((resolve) => {
      if (control.value !== '1234') resolve({ invalidCurrentPassword: true });
      else resolve(null);
    });
  }

  static passwordsShouldMatch(control: AbstractControl) {
    let newPassword = control.get('newPassword');
    let confirmPassword = control.get('confirmPassword');
    if (newPassword?.value !== confirmPassword?.value) {
      return { passwordsShouldMatch: true };
    }
    return false;
  }
}
