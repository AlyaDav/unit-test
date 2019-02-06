import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

let comp: AppComponent;
let fixture: ComponentFixture<AppComponent>;

describe('AppComponent', () => {
  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MainComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach((() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.debugElement.componentInstance;
  }));

  it(`should have as title 'payments-table'`, () => {
    expect(comp.title).toEqual('payments-table');
  });
});
