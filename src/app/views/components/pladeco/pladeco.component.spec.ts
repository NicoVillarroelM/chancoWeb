import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PladecoComponent } from './pladeco.component';

describe('PladecoComponent', () => {
  let component: PladecoComponent;
  let fixture: ComponentFixture<PladecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PladecoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PladecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
