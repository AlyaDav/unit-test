import {Payment} from './payment';

describe('Payment', () => {
    it('should create an instance of Payment', () =>{
        expect(new Payment()).toBeTruthy();
    })
})

it('should accept values', () => {
    let payment = new Payment();
    payment = {
        name: '111',
        cost: 111,
        }
    expect(payment.name).toEqual('111');
    expect(payment.cost).toEqual(111);
});