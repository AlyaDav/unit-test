import { Component, OnInit, ViewChild, Input, Output, EventEmitter, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Payment } from 'src/app/models/payment';
import { Month } from 'src/app/models/month';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() payTable: Payment[];

  @Output() deleteRowPayment = new EventEmitter<Payment>();
  @Output() changeMonthsInTable = new EventEmitter<number[]>();
  @ViewChild(MatTable) matTable: MatTable<any>;

  constructor() { }

  displayedColumns: string[] = [
    'Наименование платежа', 'Стоимость за день', 'Янв',
    'Фев', 'Мар', 'Апр', 'Май',
    'Июн', 'Июл', 'Авг', 'Сен',
    'Окт', 'Ноя', 'Дек', 'Удалить'];

  ngOnInit() { }

  deletePayment(currentPayment: Payment) {
    this.deleteRowPayment.emit(currentPayment);
    this.matTable.renderRows(); // не знаю как использовать в тесте
  }

  changeMonths(currentPayment: Payment, currentMonth: Month) {
    let indexPayment = this.payTable.indexOf(currentPayment);
    let indexMonth = this.payTable[indexPayment].months.indexOf(currentMonth);
    this.changeMonthsInTable.emit([indexPayment, indexMonth])
  }
}
