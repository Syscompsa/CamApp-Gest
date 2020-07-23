import { TestBed } from '@angular/core/testing';

import { DatagraphService } from './datagraph.service';

describe('DatagraphService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatagraphService = TestBed.get(DatagraphService);
    expect(service).toBeTruthy();
  });
});
