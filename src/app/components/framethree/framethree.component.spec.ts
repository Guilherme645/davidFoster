/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FramethreeComponent } from './framethree.component';

describe('FramethreeComponent', () => {
  let component: FramethreeComponent;
  let fixture: ComponentFixture<FramethreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FramethreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FramethreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
