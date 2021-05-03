import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { LetterComponent } from '../letter/letter.component';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.sass']
})
export class WordComponent implements OnInit, OnChanges {

  @Input() wordAsArray: Array<string>;
  @Input() finished: boolean;
  @Output() setLetter: EventEmitter<number> = new EventEmitter();
  @ViewChild(LetterComponent) letterComp: LetterComponent;

  public fullWidth: number;
  public innerWidth: number;
  public offset: number = 0;
  public letterWidth: number = 130;
  public lettersPerView: number;
  public maxOffset: number;
  public height: number = 200;
  public wordLength: number;

  public addLetter = (index: number) => {
    this.setLetter.emit(index);
  }

  public setOffset = (dir: boolean) => {
    this.maxOffset = this.letterWidth*this.wordAsArray.length - this.lettersPerView * this.letterWidth;
    if(dir) {
      if(this.offset - 2 * this.lettersPerView * this.letterWidth < 0) {
        this.offset = 0;
      } else {
        this.offset -= this.lettersPerView * this.letterWidth;
      }
    } else {
      if(this.offset + this.lettersPerView * this.letterWidth > this.maxOffset) {
        this.offset = this.maxOffset;
      } else {
        this.offset += this.lettersPerView * this.letterWidth;
      }
      
    }
  } 

  public resize = () => {
    this.offset = 0;
    this.innerWidth = Math.floor((window.innerWidth * 0.9 - 140) / this.letterWidth) * this.letterWidth;
    this.fullWidth = this.innerWidth + 140;
    this.lettersPerView = Math.floor(this.innerWidth / this.letterWidth);
    if(this.lettersPerView > this.wordAsArray.length) {
      this.innerWidth = this.letterWidth * this.wordAsArray.length;
      this.fullWidth = this.innerWidth;
    }
    if(window.innerWidth < 740) {
      this.letterWidth = 80;
    } else {
      this.letterWidth = 130;
    }
    this.height = this.letterWidth * (20/13);
  }

  constructor() { 
    window.onresize = this.resize;
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.wordAsArray.length != this.wordLength) {
      this.wordLength = this.wordAsArray.length;
      this.resize();
    }
  }

  ngOnInit(): void {
    if(window.innerWidth < 740) {
      this.letterWidth = 80;
    } else {
      this.letterWidth = 130;
    }
    this.height = this.letterWidth * (20/13);
    this.innerWidth = Math.floor((window.innerWidth * 0.9 - 140) / this.letterWidth) * this.letterWidth;
    this.fullWidth = this.innerWidth + 140;
    this.lettersPerView = Math.floor(this.innerWidth / this.letterWidth);
    if(this.lettersPerView > this.wordAsArray.length) {
      this.innerWidth = this.letterWidth * this.wordAsArray.length;
      this.fullWidth = this.innerWidth;
    }
    this.wordLength = this.wordAsArray.length;
  }

}
