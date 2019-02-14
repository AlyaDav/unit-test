import { Injectable } from '@angular/core';
import { Payment } from '../models/payment';
import { Month } from '../models/month';
import { mockMonths } from '../mock/months';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor() { }

  createNewPayment(payment: Payment, payTable: Payment[]): Payment[] {
    let months: Month[] = [];
    for (var i = 0; i < mockMonths[0].months.length; i++) {
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
    for (let i = 0; i < currentPayment.months.length; i++) {
      if (currentPayment.months[i].value) { sumInOnePayment++ }
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
