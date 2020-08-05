import { TestBed } from '@angular/core/testing';

import { GetTagHTMLService } from './get-tag-html.service';

describe('GetTagHTMLService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetTagHTMLService = TestBed.get(GetTagHTMLService);
    expect(service).toBeTruthy();
  });
});
