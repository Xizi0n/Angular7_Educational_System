import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumReplyComponent } from './forum-reply.component';

describe('ForumReplyComponent', () => {
  let component: ForumReplyComponent;
  let fixture: ComponentFixture<ForumReplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumReplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
