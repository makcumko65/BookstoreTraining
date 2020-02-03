import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForbittenComponent } from './forbitten.component';

describe('ForbittenComponent', () => {
  let component: ForbittenComponent;
  let fixture: ComponentFixture<ForbittenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForbittenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForbittenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
