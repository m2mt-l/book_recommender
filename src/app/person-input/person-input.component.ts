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

    selectedGender: string = '';
    selectedCountry: string = '';
    selectedImageURL: string = '';
    selectedAge: number = 0;
    selectedAgeRange: string = '';

    constructor(private personService: PersonService, private bookService: BookService) {
        personService.personSubject?.subscribe((personSubject) => (this.person = personSubject));
    }

    getStaticPerson(): void {
        this.personService.setStaticPerson1();
        this.bookService.getBookList('Law');
    }

    getRandomPerson(): void {
        this.personService.setRandomPerson();
        console.log('selectedGender');
        this.selectedGender = this.person?.gender === undefined ? '' : this.person.gender;
        this.selectedCountry = this.person?.country === undefined ? '' : this.person.country;
        this.selectedImageURL = this.person?.imageURL === undefined ? '' : this.person.imageURL;
        this.selectedAge = this.person?.age === undefined ? 0 : this.person.age;
        this.selectedAgeRange = this.person?.ageRange === undefined ? '' : this.person.ageRange;

    }
    ngOnInit(): void {}
}
