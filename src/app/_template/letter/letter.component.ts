import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.sass']
})
export class LetterComponent implements OnInit {

  @Input() letter: String;
  @Input() index: number;
  @Input() finished: boolean;
  @Input() height: number;

  @Output() setLetter = new EventEmitter();

  public addLetter = () => {
    if(this.letter == '_')
      this.setLetter.emit(this.index);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
