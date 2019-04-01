import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QRscannigComponent } from './qrscannig.component';

describe('QRscannigComponent', () => {
  let component: QRscannigComponent;
  let fixture: ComponentFixture<QRscannigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QRscannigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QRscannigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
