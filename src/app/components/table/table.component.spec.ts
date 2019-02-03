import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { TableComponent } from './table.component';
import { DebugElement } from '@angular/core';
import { Payment } from 'src/app/models/payment';
import { By } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('TableComponent', () => {

    let comp: TableComponent;
    let fixture: ComponentFixture<TableComponent>;
    let de: DebugElement;
    let element: HTMLElement;
    let spy: jasmine.Spy;
    
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TableComponent
      ],
      imports: [

        MatTableModule,
        MatCheckboxModule,
        ReactiveFormsModule,

        FormsModule
      ],
    }).compileComponents();
  }));

  beforeEach((() => {
  
    fixture = TestBed.createComponent(TableComponent);
  comp = fixture.componentInstance;
  de = fixture.debugElement.query(By.css('.matTable'));
  element  = de.nativeElement;
  }));
  
  it('should have a Component TableComponent',()=> {
    expect(comp).toBeTruthy();
  });
  
 it('should have a table to display the payments', () => {
    expect(element.innerHTML).toContain("table");
  })

  it('should not show the pastebin before OnInit', () => {
    let table = element.querySelector("table");
     
   //Try this without the 'replace(\s\s+/g,'')' method and see what happens
   expect(table.innerText.replace(/\s\s+/g, '')).toBe("", "table should be empty");
  //  expect(spy.calls.any()).toBe(false, "Spy shouldn't be yet called");
  });
  
});
