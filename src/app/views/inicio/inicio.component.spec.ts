import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { InicioComponent } from './inicio.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';

describe('InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [InicioComponent]
    });

    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async() => {
    expect(component).toBeTruthy();
  });
});
