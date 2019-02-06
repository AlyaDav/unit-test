import { PaymentService } from './payment.service';
import { Payment } from '../models/payment';

let mockPayment: Payment;
let mockPayments: Payment[];

describe('PaymentService', () => {
  let testService: PaymentService;

  beforeEach(() => {
    testService = new PaymentService();
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
    const payments: Payment[] = [
      {
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
          },
        ]
      },
      {
        name: 'Домашний телефон',
        cost: 500,
        months: [
          {
            index: 0,
            value: false
          },
          {
            index: 1,
            value: false
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
          },]
      },
      {
        name: 'Мобильный телефон',
        cost: 300,
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
            value: true
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
          },]
      },
      {
        name: 'IPTV',
        cost: 200,
        months: [
          {
            index: 0,
            value: false
          },
          {
            index: 1,
            value: false
          },
          {
            index: 2,
            value: true
          },
          {
            index: 3,
            value: true
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
          },]
      },
      {
        name: 'Подписка на музыку',
        cost: 150,
        months: [
          {
            index: 0,
            value: false
          },
          {
            index: 1,
            value: false
          },
          {
            index: 2,
            value: true
          },
          {
            index: 3,
            value: true
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
          },]
      },
      {
        name: 'Подписка на фильмы',
        cost: 150,
        months: [
          {
            index: 0,
            value: false
          },
          {
            index: 1,
            value: false
          },
          {
            index: 2,
            value: true
          },
          {
            index: 3,
            value: true
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
          },]
      },
      {
        name: 'Абонимент на фитнес',
        cost: 1000,
        months: [
          {
            index: 0,
            value: false
          },
          {
            index: 1,
            value: false
          },
          {
            index: 2,
            value: false
          },
          {
            index: 3,
            value: true
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
          },]
      }
    ]
    mockPayments = payments;
  });

  it('should be created', () => {
    expect(testService).toBeTruthy();
  });

  it('#create new Payment should return async Payment', () => {
    const newTable: Payment[] = [...mockPayments, mockPayment];
    expect(testService.createNewPayment(mockPayment, mockPayments)).toEqual(newTable);
  });

  it('#deletePayment should return mockPayments', () => {
    mockPayments.splice(mockPayments.indexOf(mockPayment), 1);
    expect(testService.deletePayment(mockPayment, mockPayments)).toEqual(mockPayments);

  });

  it('#calculateAllSum should update', () => {
    expect(testService.calculateAllSum(mockPayments)).toBe(4100);
  });

  it('#calculateOnePayment should update', () => {
    expect(testService.calculateOnePayment(mockPayment)).toEqual(1200);
  });

});
