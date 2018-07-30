import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueboardComponent } from './issueboard.component';

describe('IssueboardComponent', () => {
  let component: IssueboardComponent;
  let fixture: ComponentFixture<IssueboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
