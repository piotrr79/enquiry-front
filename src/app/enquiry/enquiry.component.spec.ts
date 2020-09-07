import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnquiryComponent } from './enquiry.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('EnquiryComponent', () => {
  let component: EnquiryComponent;
  let fixture: ComponentFixture<EnquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormsModule, HttpClientTestingModule],
      declarations: [ EnquiryComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [EnvService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
