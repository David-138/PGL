import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListOfMangasPage } from './list-of-mangas.page';

describe('ListOfMangasPage', () => {
  let component: ListOfMangasPage;
  let fixture: ComponentFixture<ListOfMangasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfMangasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
