import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LieuxParCategoriePage } from './lieux-par-categorie.page';

describe('LieuxParCategoriePage', () => {
  let component: LieuxParCategoriePage;
  let fixture: ComponentFixture<LieuxParCategoriePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LieuxParCategoriePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LieuxParCategoriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
