import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsAddContentComponent } from './forms-add-content.component';

describe('FormsAddContentComponent', () => {
  let component: FormsAddContentComponent;
  let fixture: ComponentFixture<FormsAddContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsAddContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsAddContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
