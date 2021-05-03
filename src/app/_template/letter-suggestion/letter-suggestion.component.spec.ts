import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterSuggestionComponent } from './letter-suggestion.component';

describe('LetterSuggestionComponent', () => {
  let component: LetterSuggestionComponent;
  let fixture: ComponentFixture<LetterSuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterSuggestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
