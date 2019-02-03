import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { DebugElement } from '@angular/core';

import { By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

describe('HeaderComponent', () => {

    let comp: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;
    let de: DebugElement;
    let element: HTMLElement;
    let spy: jasmine.Spy;
    
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent
      ],
      imports: [
        MatButtonModule,
        MatInputModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [
        FormBuilder
      ]
    }).compileComponents();
  }));

  beforeEach((() => {
    fixture = TestBed.createComponent(HeaderComponent);
  comp = fixture.componentInstance;
  de = fixture.debugElement.query(By.css('.header'));
  element  = de.nativeElement;
  }));
  
  it('should have a Component HeaderComponent',()=> {
    expect(comp).toBeTruthy();
  });
  
 it('should have a form to display the payments', () => {
    expect(element.innerHTML).toContain("form");
  })

  it('should have a form to display the payments', () => {
    expect(element.innerHTML).toContain("h1");
  })

//   it('should not show the pastebin before OnInit', () => {
//     let form = element.querySelector("form");
     
//    //Try this without the 'replace(\s\s+/g,'')' method and see what happens
//    expect(form.innerText.replace(/\s\s+/g, '')).toBe("", "form should be empty");
//     expect(spy.calls.any()).toBe(false, "Spy shouldn't be yet called");
//   });


  
});