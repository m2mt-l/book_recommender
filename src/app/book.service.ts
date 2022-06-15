import { Injectable } from '@angular/core';
import { Observable, of, Subject, throwError } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { catchError, retry, tap, map } from 'rxjs/operators';
import { Book } from './model/book';
@Injectable({
    providedIn: 'root',
})
export class BookService {
    bookList: Book[] = [];
    url: string = 'http://openlibrary.org/search.json?q=';

    constructor(private http: HttpClient) {}

    updateLocalList(topic: string) {
        this.getBookList(topic);
    }

    getAllLocal(): Book[] {
        return this.bookList;
    }

    get(index: number): Book {
        return this.bookList[index];
    }

    getBookList(topic: string): void {
        const url = this.url + topic;
        this.http
            .get<Book>(url, { observe: 'body', responseType: 'json' })
            .pipe(map((data: any) => data.docs))
            .subscribe((data: any) => console.log(data));
    }
}
