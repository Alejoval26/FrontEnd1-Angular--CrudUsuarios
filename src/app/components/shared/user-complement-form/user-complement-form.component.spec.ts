import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComplementFormComponent } from './user-complement-form.component';

describe('UserComplementFormComponent', () => {
  let component: UserComplementFormComponent;
  let fixture: ComponentFixture<UserComplementFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserComplementFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComplementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
