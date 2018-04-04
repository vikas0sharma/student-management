import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAllComponent } from './student-all.component';

describe('StudentAllComponent', () => {
  let component: StudentAllComponent;
  let fixture: ComponentFixture<StudentAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
