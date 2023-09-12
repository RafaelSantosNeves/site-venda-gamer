import { TestBed } from '@angular/core/testing';

import { SiteVendaService } from './site-venda.service';

describe('SiteVendaService', () => {
  let service: SiteVendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiteVendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
