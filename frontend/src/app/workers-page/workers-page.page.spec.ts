import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkersPagePage } from './workers-page.page';

describe('WorkersPagePage', () => {
  let component: WorkersPagePage;
  let fixture: ComponentFixture<WorkersPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WorkersPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
