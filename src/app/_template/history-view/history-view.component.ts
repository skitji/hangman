import { Component, Input, OnInit } from '@angular/core';
import { WordData } from 'src/app/_interfaces/word-data';

@Component({
  selector: 'app-history-view',
  templateUrl: './history-view.component.html',
  styleUrls: ['./history-view.component.sass']
})
export class HistoryViewComponent implements OnInit {

  @Input() show: boolean;

  public history: Array<WordData> = [];

  constructor() {
    for(let i = 0; i < 500; i++) {
      let tmp = new WordData(undefined, "T_st");
      tmp.setMostLetter('e');
      tmp.setExcludedLetters(['a, b, c, d, f'])
      this.history.push(tmp);
    }
  }

  ngOnInit(): void {
  }

}
