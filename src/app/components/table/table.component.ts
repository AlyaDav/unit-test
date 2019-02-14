import { Component, OnInit, ViewChild, Input, Output, EventEmitter, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Payment } from 'src/app/models/payment';
import { Month } from 'src/app/models/month';
import { mockDisplayedColumns } from 'src/app/mock/ payments';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns:string[];
  @Input() payTable: Payment[];

  @Output() deleteRowPayment = new EventEmitter<Payment>();
  @Output() changeMonthsInTable = new EventEmitter<number[]>();
  @ViewChild(MatTable) matTable: MatTable<any>;

  constructor() { }

  ngOnInit() { this.displayedColumns=mockDisplayedColumns;}

  deletePayment(currentPayment: Payment) {
    this.deleteRowPayment.emit(currentPayment);
    this.matTable.renderRows(); 
  }

  changeMonths(currentPayment: Payment, currentMonth: Month) {
    let indexPayment = this.payTable.indexOf(currentPayment);
    let indexMonth = this.payTable[indexPayment].months.indexOf(currentMonth);
    this.changeMonthsInTable.emit([indexPayment, indexMonth])
  }
}
