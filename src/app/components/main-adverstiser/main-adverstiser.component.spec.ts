import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAdverstiserComponent } from './main-adverstiser.component';

describe('MainAdverstiserComponent', () => {
  let component: MainAdverstiserComponent;
  let fixture: ComponentFixture<MainAdverstiserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAdverstiserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAdverstiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
