import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCompletoComponent } from './home-completo.component';

describe('HomeCompletoComponent', () => {
  let component: HomeCompletoComponent;
  let fixture: ComponentFixture<HomeCompletoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCompletoComponent]
    });
    fixture = TestBed.createComponent(HomeCompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
