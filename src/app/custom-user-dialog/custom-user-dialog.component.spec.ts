import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomUserDialogComponent } from './custom-user-dialog.component';

describe('CustomUserDialogComponent', () => {
  let component: CustomUserDialogComponent;
  let fixture: ComponentFixture<CustomUserDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomUserDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
