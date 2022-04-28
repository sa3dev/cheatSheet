import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageProgrammationComponent } from './language-programmation.component';

describe('LanguageProgrammationComponent', () => {
  let component: LanguageProgrammationComponent;
  let fixture: ComponentFixture<LanguageProgrammationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageProgrammationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageProgrammationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
