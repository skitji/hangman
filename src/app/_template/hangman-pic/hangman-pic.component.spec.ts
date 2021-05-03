import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanPicComponent } from './hangman-pic.component';

describe('HangmanPicComponent', () => {
  let component: HangmanPicComponent;
  let fixture: ComponentFixture<HangmanPicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HangmanPicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HangmanPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
