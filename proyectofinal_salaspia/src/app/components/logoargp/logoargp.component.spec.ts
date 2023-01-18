import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LOGOARGPComponent } from './logoargp.component';

describe('LOGOARGPComponent', () => {
  let component: LOGOARGPComponent;
  let fixture: ComponentFixture<LOGOARGPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LOGOARGPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LOGOARGPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
