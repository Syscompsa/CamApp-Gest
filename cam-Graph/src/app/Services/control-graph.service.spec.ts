import { TestBed } from '@angular/core/testing';

import { ControlGraphService } from './control-graph.service';

describe('ControlGraphService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ControlGraphService = TestBed.get(ControlGraphService);
    expect(service).toBeTruthy();
  });
});
