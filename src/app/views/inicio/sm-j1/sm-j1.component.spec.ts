import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmJ1Component } from './sm-j1.component';

describe('SmJ1Component', () => {
  let component: SmJ1Component;
  let fixture: ComponentFixture<SmJ1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmJ1Component]
    });
    fixture = TestBed.createComponent(SmJ1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
