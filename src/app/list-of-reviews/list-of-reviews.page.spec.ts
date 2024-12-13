import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListOfReviewsPage } from './list-of-reviews.page';

describe('ListOfReviewsPage', () => {
  let component: ListOfReviewsPage;
  let fixture: ComponentFixture<ListOfReviewsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfReviewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
