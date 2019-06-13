import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrangeItemsComponent } from './arrange-items.component';

describe('ArrangeItemsComponent', () => {
  let component: ArrangeItemsComponent;
  let fixture: ComponentFixture<ArrangeItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrangeItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrangeItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
