import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByoppageComponent } from './byoppage.component';

describe('ByoppageComponent', () => {
  let component: ByoppageComponent;
  let fixture: ComponentFixture<ByoppageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByoppageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByoppageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
