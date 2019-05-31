import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposPage } from './propos.page';

describe('ProposPage', () => {
  let component: ProposPage;
  let fixture: ComponentFixture<ProposPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
