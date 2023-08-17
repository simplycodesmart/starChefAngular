import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeStyleComponent } from './recipe-style.component';

describe('RecipeStyleComponent', () => {
  let component: RecipeStyleComponent;
  let fixture: ComponentFixture<RecipeStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
