import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Payment } from 'src/app/models/payment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() createNewPayment = new EventEmitter<Payment>();
  newPay: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.newPay = this.formBuilder.group({
      newNamePay: ['', Validators.required],
      newCostDay: ['', Validators.compose([Validators.required,
      Validators.pattern('^([1-9][0-9]*)$')])]
    });
  }

  onSubmit() {
    const value = this.newPay.value;

    this.newPay.reset();
    // inputs clear witout errors
    this.newPay.get('newNamePay').setErrors(null);
    this.newPay.get('newCostDay').setErrors(null);
    this.createNewPayment.emit({ name: value.newNamePay, cost: value.newCostDay } as Payment);
  }

}


