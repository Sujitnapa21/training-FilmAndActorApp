import { TestBed } from '@angular/core/testing';

import { FilmandactorService } from './filmandactor.service';

describe('FilmandactorService', () => {
  let service: FilmandactorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmandactorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
