import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { BookService } from '../book.service';
import { Person } from '../model/person';
import { Observable } from 'rxjs';
import { config } from '../data/config';
@Component({
    selector: 'app-person-input',
    templateUrl: './person-input.component.html',
    styleUrls: ['./person-input.component.css'],
})
export class PersonInputComponent implements OnInit {
    person?: Person;
    genders: string[] = config.genders;
    countries: string[] = config.countries;

    constructor(private personService: PersonService, private bookService: BookService) {
        personService.personSubject?.subscribe((personSubject) => (this.person = personSubject));
    }

    getStaticPerson(): void {
        this.personService.setStaticPerson1();
        this.bookService.getBookList('Dinosaurs');
    }

    getRandomPerson(): void {
        this.personService.setRandomPerson();
    }
    ngOnInit(): void {}
}
