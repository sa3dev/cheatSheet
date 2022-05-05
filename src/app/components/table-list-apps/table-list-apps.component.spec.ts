import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListAppsComponent } from './table-list-apps.component';

describe('TableListAppsComponent', () => {
  let component: TableListAppsComponent;
  let fixture: ComponentFixture<TableListAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableListAppsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableListAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
