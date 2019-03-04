import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDetailItemComponent } from './nav-detail-item.component';

describe('NavDetailItemComponent', () => {
  let component: NavDetailItemComponent;
  let fixture: ComponentFixture<NavDetailItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavDetailItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavDetailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
