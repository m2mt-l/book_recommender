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
    url: string = 'http://openlibrary.org/search.json?title=';

    book: Book = {
        title: '',
        author: '',
        publisher: '',
        pubDate: '',
        isbn: 0,
    };

    constructor(private http: HttpClient) {}

    updateLocalList(topic: string) {
        this.getBookList(topic);
    }

    getAllLocal(): Book[] {
        return this.bookList;
    }

    get(index: number): Observable<Book> {
        return of(this.bookList[index]);
    }

    getBookList(topic: string): void {
        const url = this.url + topic + '&limit=5';
        this.http
            .get<Book>(url, { observe: 'body', responseType: 'json' })
            .pipe(map((data: any) => data.docs))
            .subscribe((data: any) => this.setBookInfo(data));
    }

    setBookInfo(data: any): void {
        console.log(data);

        if (this.bookList.length != 0) this.bookList = [];

        for (let i of data) {
            this.book = {
                title: i.title,
                author: i.author_name[0],
                publisher: i.publisher[0],
                pubDate: i.publish_date[0],
                isbn: this.setIsbn(i.isbn),
            };
            this.bookList.push(this.book);
        }
        console.log(this.bookList);
    }

    setIsbn(isbn: any): number {
        if (isbn === undefined) return -1;
        else return isbn[0];
    }
}
