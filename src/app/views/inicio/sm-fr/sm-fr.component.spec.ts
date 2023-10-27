import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SmFrComponent } from './sm-fr.component';

describe('SmFrComponent', () => {
  let component: SmFrComponent;
  let fixture: ComponentFixture<SmFrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmFrComponent]
    });
    fixture = TestBed.createComponent(SmFrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
