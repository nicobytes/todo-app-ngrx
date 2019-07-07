import { FormControl } from '@angular/forms';

export class CustomValidators {

  static isBlank(control: FormControl): { [key: string]: boolean } | null {
    const value: string = control.value;
    if (value === null || value === '') {
      return null;
    }
    if (value.trim() === '') {
      return { is_blank: true };
    }
    return null;
  }

}
