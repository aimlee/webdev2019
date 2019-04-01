import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QRcodePageComponent } from './qrcode-page.component';

describe('QRcodePageComponent', () => {
  let component: QRcodePageComponent;
  let fixture: ComponentFixture<QRcodePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QRcodePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QRcodePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
