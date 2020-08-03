import { TestBed } from '@angular/core/testing';

import { ControlPaletaService } from './control-paleta.service';

describe('ControlPaletaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ControlPaletaService = TestBed.get(ControlPaletaService);
    expect(service).toBeTruthy();
  });
});
