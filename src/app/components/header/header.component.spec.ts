import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroupDirective } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Payment } from 'src/app/models/payment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

let mockPayment: Payment;

describe('HeaderComponent', () => {

  let comp: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let de: DebugElement;
  let element: HTMLElement;
  let responsePayment: Payment;
  let formDirective: FormGroupDirective;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent
      ],
      imports: [
        MatButtonModule,
        MatInputModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule
      ],
      providers: [
        FormBuilder
      ]
    }).compileComponents();
  }));

  beforeEach((() => {
    fixture = TestBed.createComponent(HeaderComponent);
    comp = fixture.componentInstance;
    comp.ngOnInit();
    de = fixture.debugElement.query(By.css('.header'));
    element = de.nativeElement;
    comp.createNewPayment.subscribe((response: Payment) => {
      responsePayment = response
    });
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
  }));

  it('should have a Component HeaderComponent', () => {
    expect(comp).toBeTruthy();
  });

  it('should have a form to display the payments', () => {
    expect(element.innerHTML).toContain("form");
  })

  it('should have a h1 to display the payments', () => {
    expect(element.innerHTML).toContain("h1");
  })
  it('should have a button to display the payments', () => {
    expect(element.innerHTML).toContain("button");
  })
  it('form invalid when empty', () => {
    expect(comp.newPay.valid).toBeFalsy();
  });

  it('name payment field validity', () => {
    let name = comp.newPay.controls['newNamePay'];
    expect(name.valid).toBeFalsy();
  });

  it('cost payment field validity', () => {
    let cost = comp.newPay.controls['newCostDay'];
    expect(cost.valid).toBeFalsy();
  });

  it('name field validity', () => {
    let errors = {};
    let name = comp.newPay.controls['newNamePay'];
    errors = name.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('cost field validity', () => {
    let errors = {};
    let cost = comp.newPay.controls['newCostDay'];
    errors = cost.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('submitting a form emits a payment', () => {
    expect(comp.newPay.valid).toBeFalsy();
    comp.newPay.controls['newNamePay'].setValue("Интернет");
    comp.newPay.controls['newCostDay'].setValue(600);
    expect(comp.newPay.valid).toBeTruthy();

    formDirective = comp.formDirective;

    comp.onSubmit(formDirective); // for emit
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(responsePayment.name).toEqual(mockPayment.name);
      expect(responsePayment.cost).toEqual(mockPayment.cost);
    });
  });
});