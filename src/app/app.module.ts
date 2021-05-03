import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LetterComponent } from './_template/letter/letter.component';
import { LetterSuggestionComponent } from './_template/letter-suggestion/letter-suggestion.component';
import { HangmanPicComponent } from './_template/hangman-pic/hangman-pic.component';
import { WordComponent } from './_template/word/word.component';
import { LengthSelection } from './_template/length-selection/length-selection.component';
import { ToastrModule } from 'ngx-toastr';
import { HistoryViewComponent } from './_template/history-view/history-view.component';


@NgModule({
  declarations: [
    AppComponent,
    LengthSelection,
    LetterComponent,
    LetterSuggestionComponent,
    HangmanPicComponent,
    WordComponent,
    HistoryViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
