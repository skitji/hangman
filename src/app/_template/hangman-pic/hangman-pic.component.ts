import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hangman-pic',
  templateUrl: './hangman-pic.component.html',
  styleUrls: ['./hangman-pic.component.sass']
})
export class HangmanPicComponent implements OnInit {

  @Input() failedAttempts: number;

  constructor() { }

  ngOnInit(): void {
  }

}
