import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { SummaryComponent } from './summary.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {

  let comp: SummaryComponent;
  let fixture: ComponentFixture<SummaryComponent>;
  let de: DebugElement;
  let element: HTMLElement;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SummaryComponent
      ]
    }).compileComponents();
  }));

  beforeEach((() => {
    fixture = TestBed.createComponent(SummaryComponent);
    comp = fixture.componentInstance;
    comp.ngOnInit();
    de = fixture.debugElement.query(By.css('.h5'));
    element = de.nativeElement; 
  }));


  it('should have a Component SummaryComponent', () => {
    expect(comp).toBeTruthy();
  });

  it('should have a SummaryComponent to display the payments', () => {
    expect(element.innerHTML).toContain("h5");
  });

});