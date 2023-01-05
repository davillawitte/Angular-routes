/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FilhoturmaComponent } from './filhoturma.component';

describe('FilhoturmaComponent', () => {
  let component: FilhoturmaComponent;
  let fixture: ComponentFixture<FilhoturmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilhoturmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilhoturmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
