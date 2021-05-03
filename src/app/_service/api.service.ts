import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { ApiData } from '../_interfaces/api-data';
import { WordData } from '../_interfaces/word-data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  /**
   * Gets api data for given word
   * @param word the word
   * @param callback response handling
   * @param error error handling
   */
  public get = (word: WordData, callback: (data: ApiData) => void, error?: (err: any) => void) => {
    this.http
      .get<ApiData>(
        `http://hangman-api.skitji.de/?word=${word.getName()}&excludedletters=${(word.getExcludedLettersAsString().length > 0) ? word.getExcludedLettersAsString() : ''}`
      ).subscribe(
        callback,
        error
      )
  }

  public check = (word: WordData, callback: (data: boolean) => void, error: (err: any) => void) => {
    this.get(word, (data: ApiData) => {
      console.log(data, word);
      callback(data.number > 0);
    }, error);
  }

  constructor(private http: HttpClient) {}
}
