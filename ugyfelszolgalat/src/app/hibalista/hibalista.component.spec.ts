import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HibalistaComponent } from './hibalista.component';

describe('HibalistaComponent', () => {
  let component: HibalistaComponent;
  let fixture: ComponentFixture<HibalistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HibalistaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HibalistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
