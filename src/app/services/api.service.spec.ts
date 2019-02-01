import { TestBed, fakeAsync } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ApiService]
  }));

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });

  it('retern data', fakeAsync(() => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service.getData(  ))
    
    .toBeTruthy([{'qwqw': 1111}, {'aaa': 2222}]);
    
  }));
});
