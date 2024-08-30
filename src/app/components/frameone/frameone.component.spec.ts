/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FrameoneComponent } from './frameone.component';

describe('FrameoneComponent', () => {
  let component: FrameoneComponent;
  let fixture: ComponentFixture<FrameoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
