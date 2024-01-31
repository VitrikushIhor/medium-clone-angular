import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendErrorsMessageComponent } from './backend-errors-message.component';

describe('BackendErrorsMessageComponent', () => {
  let component: BackendErrorsMessageComponent;
  let fixture: ComponentFixture<BackendErrorsMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackendErrorsMessageComponent]
    });
    fixture = TestBed.createComponent(BackendErrorsMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
