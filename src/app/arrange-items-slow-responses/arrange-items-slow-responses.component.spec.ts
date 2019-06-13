import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrangeItemsSlowResponsesComponent } from './arrange-items-slow-responses.component';

describe('ArrangeItemsSlowResponsesComponent', () => {
  let component: ArrangeItemsSlowResponsesComponent;
  let fixture: ComponentFixture<ArrangeItemsSlowResponsesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrangeItemsSlowResponsesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrangeItemsSlowResponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
