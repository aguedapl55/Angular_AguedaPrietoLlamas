import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LapsoComponent } from './lapso.component';

describe('LapsoComponent', () => {
  let component: LapsoComponent;
  let fixture: ComponentFixture<LapsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LapsoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LapsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
