import { HttpClient } from "@angular/common/http";

export class WordData {
    private name: string;
    private excludedLetters: Array<string>;
    private mostLetter: string;
    private failedAttempts: number;
    private finished: boolean;

    /**
     * Creates new word with given length or given name
     * @precondition only and at least parameter
     * @param nameLength length of name
     * @param name name of word
     */
    constructor(
        nameLength?: number,
        name?: string
    ) {
        if(name == undefined) {
            this.name = '';
            for(let _ = 0; _ < nameLength; _++) this.name +=  '_';
        } else if(nameLength == undefined) {
            this.name = name
        }
        this.failedAttempts = 0;
        this.excludedLetters = [];
    }

    /**
     * Get the name
     * @returns the name
     */
    public getName = (): string => {
        return this.name;
    }

    /**
     * Set name of word
     * @param name new name
     */
    public setName = (name: string) => {
        this.name = name;
        this.finished = this.getNameArray().every(l => l != "_");
    }

    /**
     * Set a new letter of name 
     * @precondition length of letter must be 1
     * @param index index of new letter
     * @param letter new letter (letter.length == 1)
     */
    public setLetter = (index: number): void => {
        let array: Array<string> = this.getNameArray();
        array[index] = this.mostLetter;
        this.name = array.reduce((a, b) => a + b);
        this.finished = this.getNameArray().every(l => l != "_");
    }

    /**
     * Get the name as array
     * @returns the name as array of letters
     */
    public getNameArray = (): Array<string> => {
        return this.name.split('');
    }

    /**
     * Get excluded letters as string
     * @returns the exluded letters as string
     */
    public getExcludedLettersAsString = (): string => {
        return (this.excludedLetters.length > 0) ? this.excludedLetters.reduce((a, b) => a + b) : '';
    }

    /**
     * Adds a letter to excluded letters
     * @param letter new exluded letter
     */
    public addExludedLetter = () => {
        this.excludedLetters.push(this.mostLetter);
    }

    /**
     * Set excluded Letters
     * @precondition Elements of Array must be length of 1
     * @param letters excluded letters as Array
     */
    public setExcludedLetters = (letters: Array<string>) => {
        this.excludedLetters = [...letters];
    }

    /**
     * Removes a letter from exluded letters array
     * @param letter letter to be removed
     */
    public removeExcludedLetter = (letter: string) => {
        this.excludedLetters = this.excludedLetters.filter(el => el != letter);
    }  

    /**
     * Get most letter
     * @returns most letter
     */
    public getMostLetter = () => {
        return this.mostLetter;
    }

    /**
     * Set most letter
     * @param letter new most letter
     */
    public setMostLetter = (letter: string) => {
        this.mostLetter = letter;
    }

    /**
     * Get failed attempts
     * @returns failed attempts
     */
    public getFailedAttempts = () => {
        return this.failedAttempts;
    }

    /**
     * Add a failed attempt
     */
    public addFailedAttempt = () => {
        this.failedAttempts++;
    }

    /**
     * Set failed attempts
     * @param attempts number of tries
     */
    public setFailedAttempts = (attempts: number) => {
        this.failedAttempts = attempts;
    }

    /**
     * Get the length of name
     * @returns the length of name
     */
     public length = (): number => {
        return this.name.length;
    }

    /**
     * Get a copy of word
     * @returns a clone
     */
     public clone = (): WordData => {
        let tmp: WordData = new WordData(undefined, this.name);
        tmp.setMostLetter(this.mostLetter);
        tmp.setFailedAttempts(this.failedAttempts);
        tmp.setExcludedLetters(this.excludedLetters);
        return tmp;
    }

    /**
     * Check if every letter is filled
     * @returns true if every letter is filled
     */
    public isFinished = (): boolean => {
        return this.finished;
    }
}
