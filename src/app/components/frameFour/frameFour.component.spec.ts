/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FrameFourComponent } from './frameFour.component';

describe('FrameFourComponent', () => {
  let component: FrameFourComponent;
  let fixture: ComponentFixture<FrameFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
