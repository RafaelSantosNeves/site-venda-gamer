import { TestBed } from '@angular/core/testing';

import { SiteVendasGamerService } from './site-vendas-gamer.service';

describe('SiteVendasGamerService', () => {
  let service: SiteVendasGamerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiteVendasGamerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
