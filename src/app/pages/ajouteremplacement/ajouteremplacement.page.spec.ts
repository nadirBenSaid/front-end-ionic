import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteremplacementPage } from './ajouteremplacement.page';

describe('AjouteremplacementPage', () => {
  let component: AjouteremplacementPage;
  let fixture: ComponentFixture<AjouteremplacementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouteremplacementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouteremplacementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
