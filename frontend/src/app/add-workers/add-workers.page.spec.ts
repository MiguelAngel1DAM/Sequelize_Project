import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddWorkersPage } from './add-workers.page';

describe('AddWorkersPage', () => {
  let component: AddWorkersPage;
  let fixture: ComponentFixture<AddWorkersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddWorkersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
