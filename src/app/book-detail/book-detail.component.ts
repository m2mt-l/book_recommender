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
    book$!: Observable<Book>;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        public bookService: BookService
    ) {}

    ngOnInit(): void {
        this.book$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) => this.bookService.get(Number(params.get('id')!)))
        );
        /*         this.route.data.subscribe((data) => {
            const book: Book = data[0];
            console.log(book);
            this.book = book;
        }); */
    }

    subscribeBook(): Book {
        let book: any;
        this.book$.subscribe((x) => (book = x));
        return book;
    }

    getIsbn(): string {
        const isbn: number = this.subscribeBook().isbn;
        return isbn === -1 ? 'None' : String(isbn);
    }
}
