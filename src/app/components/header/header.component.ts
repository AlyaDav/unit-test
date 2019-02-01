import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormGroupDirective } from '@angular/forms';
import { Payment } from 'src/app/models/payment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() createNewPayment = new EventEmitter<Payment>();

  constructor(private formBuilder: FormBuilder) { }

  newPay: FormGroup;

  ngOnInit() {
    this.newPay = this.formBuilder.group({
      newNamePay: ['', Validators.required],
      newCostDay: ['', Validators.compose([Validators.required,
      Validators.pattern('^([1-9][0-9]*)$')])]
    });
  }

  onSubmit(form, formDirective: FormGroupDirective) {
    let name = this.formControl.newNamePay.value;
    let cost = this.formControl.newCostDay.value;
    form.reset();
    formDirective.resetForm();
    this.createNewPayment.emit({ name: name, cost: cost } as Payment);
  }

  get formControl(): any {
    return this.newPay.controls;
  }

}


