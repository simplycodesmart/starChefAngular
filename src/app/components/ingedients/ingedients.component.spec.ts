import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngedientsComponent } from './ingedients.component';

describe('IngedientsComponent', () => {
  let component: IngedientsComponent;
  let fixture: ComponentFixture<IngedientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngedientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngedientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
