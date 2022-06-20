import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap, of } from 'rxjs';
import { Book } from '../model/book';
import { BookService } from '../book.service';
@Component({
    selector: 'app-book-detail',
    templateUrl: './book-detail.component.html',
    styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {

    book!: Book;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        public bookService: BookService,
    ) {}

    ngOnInit(): void {

        this.route.data.subscribe(data => {
            const book: Book = data[0];
            console.log(book);
            this.book = book
        });
    }
}
