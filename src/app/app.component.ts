import { Component } from '@angular/core';
import { ApiData } from './_interfaces/api-data';
import { WordData } from './_interfaces/word-data';
import { ApiService } from './_service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'hangman';
  public word: WordData;
  public possibleLetters: Array<string> = new Array<string>();
  public included: boolean = false;
  /*############################################*/
  public history: Array<WordData> = [];
  public wrongTries: Array<number> = [];
  public currentHistoryIndex: number = 0;
  public historyView: boolean = false;

  /**
   * Generates word and starts searching
   * @param length length of word
   */
  public start = (length: number): void => {
    this.word = new WordData(length); //Generate word
    //Get first request for first letter and all possible letters
    this.api.get(this.word, (response: ApiData) => {
      this.possibleLetters = response.possibleLetters.sort(); //Set possible letters
      this.word.setMostLetter(response.mostLetter); //Set recommended letter
      if(response.number == 1) { //number of results is one
        this.word = new WordData(undefined, response.words[0]);
      }
      this.history.push(this.word.clone()); //add to history
    }, (error) => { //ERROR
      this.word = new WordData(undefined, "error");
    });  
  }

  /**
   * Adds the most letter at index and checks whether a word is still available
   * @param index index of letter
   */
  public addLetter = (index): void => {
    this.included = true;
    this.word.setLetter(index); //Set letter
    //Checks whether there are still words
    this.api.get(this.word, (response: ApiData) => { 
      if(response.number == 1) {
        this.word.setName(response.words[0]);
      } else if(response.number == 0) {
        this.word.setName("404");
      }
      this.addHistory();
    }, (error) => {
      this.word.setName("error");
    }); 
    
  }

  /**
   * Searchs next letter and checks whether a word is still available
   */
  public newLetter = (): void => {
    if(!this.included) {
      this.word.addExludedLetter();
      this.word.addFailedAttempt();
      if(this.word.getFailedAttempts() > 10) {
        this.word.setName("gameover");
        return;
      }
    }
    this.included = false;
    this.api.get(this.word, (response: ApiData) => {
      this.word.setMostLetter(response.mostLetter);
      if(response.number == 1) {
        this.word.setName(response.words[0]);
      } else if(response.number == 0) {
        this.word.setName("404");
      }
      this.addHistory();
    }, (error) => {
      this.word.setName("error");
    }); 
  }

  /**
   * Resets everything
   */
  public reset = (): void => {
    this.word = undefined;
    this.included = false;
    this.history = [];
    this.currentHistoryIndex = 0;
    console.log(3 + 44);
  }

  /**
   * Jumps one step in history
   * @param dir true -> next, false -> previous
   */
  public jumpHistory = (dir: boolean): void => {
    if(dir) {
      this.currentHistoryIndex++;
    } else {
      this.currentHistoryIndex--;    
    }
    if(this.history[this.currentHistoryIndex].getNameArray().includes(this.history[this.currentHistoryIndex].getMostLetter())) {
      this.included = true;
    } else {
      this.included = false;
    }
        
    this.word = this.history[this.currentHistoryIndex].clone();
    
  }

  /**
   * Adds the current word to History
   */
  public addHistory = (): void => {
    this.currentHistoryIndex++;
    this.history.splice(this.currentHistoryIndex);
    this.history.push(this.word.clone());
  }

  /**
   * Only use for tests
   * @param api ApiService for getting word data
   */
  constructor(
    private api: ApiService
  ) {
  }

}
