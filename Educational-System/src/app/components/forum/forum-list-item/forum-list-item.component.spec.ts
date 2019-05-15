import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumListItemComponent } from './forum-list-item.component';

describe('ForumListItemComponent', () => {
  let component: ForumListItemComponent;
  let fixture: ComponentFixture<ForumListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
