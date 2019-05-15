import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumListDetailsComponent } from './forum-list-details.component';

describe('ForumListDetailsComponent', () => {
  let component: ForumListDetailsComponent;
  let fixture: ComponentFixture<ForumListDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumListDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
