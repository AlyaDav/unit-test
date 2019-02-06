import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { TableComponent } from './table.component';
import { DebugElement } from '@angular/core';
import { Payment } from 'src/app/models/payment';
import { By } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { payments } from 'src/app/mock/ payments';
import { Month } from 'src/app/models/month';

describe('TableComponent', () => {

  let comp: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let de: DebugElement;
  let element: HTMLElement;
  let mockPayment: Payment;
  let responsePayment: Payment;
  let mockPayments: Payment[];
  let mockMonths: Month;
  let responsePaymentMonth;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TableComponent
      ],
      imports: [
        NoopAnimationsModule,
        MatTableModule,
        MatCheckboxModule,
        ReactiveFormsModule,
        FormsModule
      ],
    }).compileComponents();
  }));

  beforeEach((() => {
    fixture = TestBed.createComponent(TableComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('.matTable'));
    element = de.nativeElement;
    comp.deleteRowPayment.subscribe((response: Payment) => { responsePayment = response })
    comp.changeMonthsInTable.subscribe((response) => { responsePaymentMonth = response })
    comp.payTable = mockPayments;
    mockPayment = {
      name: 'Интернет',
      cost: 600,
      months: [
        {
          index: 0,
          value: true
        },
        {
          index: 1,
          value: true
        },
        {
          index: 2,
          value: false
        },
        {
          index: 3,
          value: false
        },
        {
          index: 4,
          value: false
        },
        {
          index: 5,
          value: false
        },
        {
          index: 6,
          value: false
        },
        {
          index: 7,
          value: false
        },
        {
          index: 8,
          value: false
        },
        {
          index: 9,
          value: false
        },
        {
          index: 10,
          value: false
        },
        {
          index: 11,
          value: false
        }]

    }
    mockMonths = mockPayment.months[0];
    mockPayments = payments;
  }));

  it('should have a Component TableComponent', () => {
    expect(comp).toBeTruthy();
  });

  it('should have a table to display the payments', () => {
    expect(element.innerHTML).toContain("table");
  })

  it('should not show the table before OnInit', () => {
    let table = element.querySelector("table");
    expect(table.innerText.replace(/\s\s+/g, '')).toBe("", "table should be empty");
  });

  it('#deletePayment emit', () => {
    comp.deletePayment(mockPayment);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(responsePayment.name).toEqual(mockPayment.name);
      expect(responsePayment.cost).toEqual(mockPayment.cost);
    
    });
  });

  it('#Payment col-vo row', () => {
    comp.deletePayment(mockPayment);
    fixture.detectChanges();
    let tableRows = fixture.nativeElement.querySelectorAll('th');
    expect(tableRows.length).toBe(15);
  });

  it('emit changeMonths', () => {
    comp.payTable = [mockPayment, mockPayment] as Payment[]; 
    comp.changeMonths(mockPayment, mockMonths);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(responsePaymentMonth[1]).toEqual(0);
    });
  });

});