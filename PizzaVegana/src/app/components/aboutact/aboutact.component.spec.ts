import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutactComponent } from './aboutact.component';

describe('AboutactComponent', () => {
  let component: AboutactComponent;
  let fixture: ComponentFixture<AboutactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
