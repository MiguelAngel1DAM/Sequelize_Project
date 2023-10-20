import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateWorkersPage } from './update-workers.page';

describe('UpdateWorkersPage', () => {
  let component: UpdateWorkersPage;
  let fixture: ComponentFixture<UpdateWorkersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateWorkersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
