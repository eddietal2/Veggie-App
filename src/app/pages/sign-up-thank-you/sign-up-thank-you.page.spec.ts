import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpThankYouPage } from './sign-up-thank-you.page';

describe('SignUpThankYouPage', () => {
  let component: SignUpThankYouPage;
  let fixture: ComponentFixture<SignUpThankYouPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpThankYouPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpThankYouPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
