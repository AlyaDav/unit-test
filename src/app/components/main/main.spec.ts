import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { MainComponent } from './main.component';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SummaryComponent } from '../summary/summary.component';
import { TableComponent } from '../table/table.component';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Payment } from 'src/app/models/payment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentService } from 'src/app/services/payment.service';
import { ApiService } from 'src/app/services/api.service';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { payments } from 'src/app/mock/ payments';
import { MatIconModule } from '@angular/material';



describe('MainComponent', () => {
    let paymentService: PaymentService;
    let apiService: ApiService;
    let mockPayment: Payment;
    let mockPayments: Payment[];
    let comp: MainComponent;
    let fixture: ComponentFixture<MainComponent>;
    let de: DebugElement;
    let element: HTMLElement;


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                MainComponent,
                HeaderComponent,
                TableComponent,
                SummaryComponent
            ],
            imports: [
                MatTableModule,
                MatIconModule,
                MatCheckboxModule,
                BrowserAnimationsModule,
                FormsModule,
                ReactiveFormsModule,
            ],
            providers: [
                MainComponent,
                PaymentService,
                ApiService
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach((() => {
        paymentService = new PaymentService();
        apiService = new ApiService();
        fixture = TestBed.createComponent(MainComponent);
        comp = fixture.componentInstance;
        comp.ngOnInit();
        de = fixture.debugElement.query(By.css('.header'));
        element = de.nativeElement;
        mockPayments = payments;
        comp.payTable = mockPayments;
        comp.allSumInMonths = 0;
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

    it('should have a Component MainComponent', () => {
        expect(comp).toBeTruthy();
    });

    it('should have a getDta() MainComponent', () => {
        comp.getData();
        expect(comp.payTable).toEqual(mockPayments);
    });

    it('should have a createNewPayment() MainComponent', () => {
        const newTable: Payment[] = [...mockPayments, mockPayment];
        comp.onCreateNewPayment(mockPayment)
        expect(comp.payTable).toEqual(newTable);
    });

    it('should have a onDeletePayment MainComponent', () => {
        mockPayments.splice(mockPayments.indexOf(mockPayment), 1);
        comp.onDeletePayment(mockPayment);
        expect(comp.payTable).toEqual(mockPayments);
    });

    it('should have a onChangeMonths MainComponent', () => {
        comp.onChangeMonths([0, 0]);
        expect(comp.payTable[0].months[0].value).toEqual(false);
    });
});  