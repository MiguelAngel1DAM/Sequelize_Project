import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectorsPagePage } from './sectors-page.page';

describe('SectorsPagePage', () => {
  let component: SectorsPagePage;
  let fixture: ComponentFixture<SectorsPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SectorsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
