import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HibabejelentoComponent } from './hibabejelento.component';

describe('HibabejelentoComponent', () => {
  let component: HibabejelentoComponent;
  let fixture: ComponentFixture<HibabejelentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HibabejelentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HibabejelentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
