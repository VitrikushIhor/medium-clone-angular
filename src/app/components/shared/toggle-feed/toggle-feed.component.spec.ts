import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleFeedComponent } from './toggle-feed.component';

describe('ToggleFeedComponent', () => {
  let component: ToggleFeedComponent;
  let fixture: ComponentFixture<ToggleFeedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToggleFeedComponent]
    });
    fixture = TestBed.createComponent(ToggleFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
