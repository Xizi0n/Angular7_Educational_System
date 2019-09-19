import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumRepliesComponent } from './forum-replies.component';

describe('ForumRepliesComponent', () => {
  let component: ForumRepliesComponent;
  let fixture: ComponentFixture<ForumRepliesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumRepliesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumRepliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
