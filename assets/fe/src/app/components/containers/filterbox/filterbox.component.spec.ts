import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterboxComponent } from './filterbox.component';

describe('FilterboxComponent', () => {
  let component: FilterboxComponent;
  let fixture: ComponentFixture<FilterboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
