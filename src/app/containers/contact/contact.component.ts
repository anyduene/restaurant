import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', Validators.required);
  comment = new FormControl('', Validators.required);

  constructor(private snackBar: MatSnackBar) { }

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getErrorMessage() {
    return 'You must enter a value';
  }

  onSend() {
    this.email.reset();
    this.name.reset();
    this.comment.reset();
  }

  openSnackBar() {
    this.snackBar.open('Comment send!', undefined, {
      duration: 1500,
      panelClass: ['green-snackbar']
    });
  }
}
