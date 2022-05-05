import { TestBed } from '@angular/core/testing';

import { LanguageProgramationService } from './language-programation.service';

describe('LanguageProgramationService', () => {
  let service: LanguageProgramationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageProgramationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
