import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-length-selection',
  templateUrl: './length-selection.component.html',
  styleUrls: ['./length-selection.component.sass']
})
export class LengthSelection implements OnInit {

  @Output() startEvent = new EventEmitter<number>();
  @Output() wordLengthChange = new EventEmitter<number>();
  public wordLength: number = 1;
  public started: boolean = false;

  public start = () => {
    if(this.wordLength > 0) {
      this.startEvent.emit(this.wordLength);
      this.started = true;
    }
  }

  public add = (n: number) => {
    this.wordLength += n;
    
  }

  public reset = () => {
    this.started = false;
  }

  public submitLength = () => {
    this.wordLengthChange.emit(this.wordLength);
  }

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
