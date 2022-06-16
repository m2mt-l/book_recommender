import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../model/book';
@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
    constructor(private bookService: BookService) {}

    ngOnInit(): void {}

    getAllBookList(): Book[] {
        return this.bookService.getAllLocal();
    }
}
