import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpVerificationPage } from './sign-up-verification.page';

describe('SignUpVerificationPage', () => {
  let component: SignUpVerificationPage;
  let fixture: ComponentFixture<SignUpVerificationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpVerificationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpVerificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
