import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBoatComponent } from './detail-boat.component';

describe('DetailBoatComponent', () => {
  let component: DetailBoatComponent;
  let fixture: ComponentFixture<DetailBoatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailBoatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBoatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
