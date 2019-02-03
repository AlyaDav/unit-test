import { TestBed } from '@angular/core/testing';

import { PaymentService } from './payment.service';
import { Payment } from '../models/payment';



describe('PaymentService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      PaymentService
    ]
  }));
  
 
 

  it('should be created', () => {
    const service: PaymentService = TestBed.get(PaymentService);
    expect(service).toBeTruthy();
  });


 

});
