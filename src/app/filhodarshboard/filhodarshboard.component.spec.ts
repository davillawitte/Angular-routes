/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FilhodarshboardComponent } from './filhodarshboard.component';

describe('FilhodarshboardComponent', () => {
  let component: FilhodarshboardComponent;
  let fixture: ComponentFixture<FilhodarshboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilhodarshboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilhodarshboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
