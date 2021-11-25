import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EqualheightComponent } from './equalheight.component';

describe('EqualheightComponent', () => {
  let component: EqualheightComponent;
  let fixture: ComponentFixture<EqualheightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EqualheightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EqualheightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
