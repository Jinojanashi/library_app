import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookGuestComponent } from './book-guest.component';

describe('BookGuestComponent', () => {
  let component: BookGuestComponent;
  let fixture: ComponentFixture<BookGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookGuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
