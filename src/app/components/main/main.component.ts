import { Component, OnInit} from '@angular/core';
import { Payment } from 'src/app/models/payment';
import { PaymentService } from 'src/app/services/payment.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  payTable: Payment[];
  allSumInMonths: number;

  constructor(
    private paymentService: PaymentService,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.apiService.getData().subscribe(
      data => {
        this.payTable = data;
        this.allSumInMonths = this.paymentService.calculateAllSum(this.payTable);
      })
  }

  onCreateNewPayment(event: Payment) {
    this.payTable = this.paymentService.createNewPayment(event, this.payTable);
  }

  onDeletePayment(currentPayment: Payment) {
    this.allSumInMonths = this.allSumInMonths - this.paymentService.calculateOnePayment(currentPayment);
    this.payTable = this.paymentService.deletePayment(currentPayment, this.payTable);
  }

  onChangeMonths(event: number[]) {
    this.payTable[event[0]].months[event[1]].value == true ?
      this.allSumInMonths = this.allSumInMonths - this.payTable[event[0]].cost :
      this.allSumInMonths = this.allSumInMonths + this.payTable[event[0]].cost;
    this.payTable[event[0]].months[event[1]].value = !this.payTable[event[0]].months[event[1]].value;
  }
}
