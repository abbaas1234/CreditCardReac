import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css'
})
export class CardFormComponent {
  cardForm : FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10)
    ]),
    cardNumber: new FormControl('', [
      Validators.required
    ]),
    expireDate: new FormControl('', [
      Validators.required
    ]),
    securityCode: new FormControl('', [
      Validators.required
    ])
  })
}
