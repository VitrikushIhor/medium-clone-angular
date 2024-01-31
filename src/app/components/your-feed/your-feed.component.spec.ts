import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourFeedComponent } from './your-feed.component';

describe('YourFeedComponent', () => {
  let component: YourFeedComponent;
  let fixture: ComponentFixture<YourFeedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YourFeedComponent]
    });
    fixture = TestBed.createComponent(YourFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
