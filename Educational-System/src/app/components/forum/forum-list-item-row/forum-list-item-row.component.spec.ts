import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumListItemRowComponent } from './forum-list-item-row.component';

describe('ForumListItemRowComponent', () => {
  let component: ForumListItemRowComponent;
  let fixture: ComponentFixture<ForumListItemRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumListItemRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumListItemRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
