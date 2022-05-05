import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkToResourceComponent } from './link-to-resource.component';

describe('LinkToResourceComponent', () => {
  let component: LinkToResourceComponent;
  let fixture: ComponentFixture<LinkToResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkToResourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkToResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
