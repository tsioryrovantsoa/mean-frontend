import { TestBed } from '@angular/core/testing';

import { AtelierGuard } from './atelier.guard';

describe('AtelierGuard', () => {
  let guard: AtelierGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AtelierGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
