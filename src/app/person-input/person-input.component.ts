import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../model/person'
@Component({
    selector: 'app-person-input',
    templateUrl: './person-input.component.html',
    styleUrls: ['./person-input.component.css'],
})
export class PersonInputComponent implements OnInit {
    person?: Person;

    constructor(private personService: PersonService) {
        personService.personSubject?.subscribe(personSubject => this.person = personSubject);
    }

    ngOnInit(): void {}
}
