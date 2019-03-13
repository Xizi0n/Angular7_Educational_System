import { TestBed } from '@angular/core/testing';

import { CompileService } from './compile.service';

describe('CompileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompileService = TestBed.get(CompileService);
    expect(service).toBeTruthy();
  });
});
