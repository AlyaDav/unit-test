import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Payment } from '../models/payment';
import { payments } from '../mock/ payments';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getData(): Observable<Payment[]> {
    return of (payments)
  }
}
