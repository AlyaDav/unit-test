import { Injectable } from '@angular/core';
import { Payment } from '../models/payment';
import { Month } from '../models/month';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor() { }

  createNewPayment(payment: Payment, payTable: Payment[]): Payment[] {
    let months: Month[] = [];
    for (var i = 0; i < 12; i++) {
      months.push({ index: i, value: false });
    }
    const newPayment: Payment = payment;
    newPayment.months = months;
    const newTable: Payment[] = [...payTable, newPayment];
    return (newTable);
  }

  deletePayment(currentPayment: Payment, payTable: Payment[]): Payment[] {
    payTable.splice(payTable.indexOf(currentPayment), 1);
    const newTable: Payment[] = payTable;
    return (newTable);
  }

  calculateOnePayment(currentPayment: Payment): number {
    let sumInOnePayment: number = 0;
    for (var i = 0; i < 12; i++) {
      if (currentPayment.months[i].value == true) { sumInOnePayment++ }
    }
    sumInOnePayment = sumInOnePayment * currentPayment.cost;
    return sumInOnePayment;
  }

  calculateAllSum(payTable: Payment[]): number {
    let allSumInMonths = 0;
    payTable.forEach(element => {
      let numberOfMonths = 0;
      element.months.forEach(
        data => {
          if (data.value === true) numberOfMonths++;
        },
      );
      allSumInMonths += numberOfMonths * element.cost;
    });
    return allSumInMonths;
  }
}
