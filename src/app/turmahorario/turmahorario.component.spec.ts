/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TurmahorarioComponent } from './turmahorario.component';

describe('TurmahorarioComponent', () => {
  let component: TurmahorarioComponent;
  let fixture: ComponentFixture<TurmahorarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurmahorarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurmahorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
