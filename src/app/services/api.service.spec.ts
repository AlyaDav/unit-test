import { TestBed, fakeAsync } from '@angular/core/testing';

import { ApiService } from './api.service';
import { Payment } from '../models/payment';

let mockPayment: Payment;
let testService: ApiService;
let responsePropertyNames, expectedPropertyNames;

describe('ApiService', () => {
  beforeEach(async() => TestBed.configureTestingModule({
    providers: [ApiService]
  }));
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
        } ]
  }

  it('should be created', () => {  
    testService = TestBed.get(ApiService);
    expect(testService).toBeTruthy();
  });
  

  it('#getPayment should return an array with Payment objects',async() => {
    testService = TestBed.get(ApiService);
    testService.getData().subscribe(value => {
      //Checking the property names of the returned object and the mockPayment object
      responsePropertyNames = Object.getOwnPropertyNames(value[0]);
      expectedPropertyNames = Object.getOwnPropertyNames(mockPayment);
      expect(responsePropertyNames).toEqual(expectedPropertyNames);
       
    });
  });
});
