import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-letter-suggestion',
  templateUrl: './letter-suggestion.component.html',
  styleUrls: ['./letter-suggestion.component.sass']
})
export class LetterSuggestionComponent implements OnInit, OnChanges {
  @Input() possibleLetters: Array<string>;
  @Input() mostLetter: string;

  public offset: number = 100
  public searching = false;
  public index = 0;

  public change = () => {
    this.offset = 100 - 100*this.index;
    
    
  }

  constructor() {

  }

  ngOnChanges(): void {
    this.offset = 100 - this.possibleLetters.indexOf(this.mostLetter) * 100;
  }

  ngOnInit(): void {
  }

}
