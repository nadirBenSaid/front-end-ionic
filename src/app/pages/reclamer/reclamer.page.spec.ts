import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamerPage } from './reclamer.page';

describe('ReclamerPage', () => {
  let component: ReclamerPage;
  let fixture: ComponentFixture<ReclamerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
