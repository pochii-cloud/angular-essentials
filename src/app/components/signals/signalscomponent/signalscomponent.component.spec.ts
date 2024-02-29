import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalscomponentComponent } from './signalscomponent.component';

describe('SignalscomponentComponent', () => {
  let component: SignalscomponentComponent;
  let fixture: ComponentFixture<SignalscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalscomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
