import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAuthComponent } from './basic-auth.component';

describe('BasicAuthComponent', () => {
  let component: BasicAuthComponent;
  let fixture: ComponentFixture<BasicAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicAuthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
