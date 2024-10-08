import { TestBed } from '@angular/core/testing';

import { EhsUiService } from './ehs-ui.service';

describe('EhsUiService', () => {
  let service: EhsUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EhsUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
