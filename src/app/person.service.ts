import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Person } from '../app/model/person'
@Injectable({
    providedIn: 'root',
})
export class PersonService {
    personSubject?: Subject<Person>

    constructor() {
        this.personSubject = new Subject();
    }

    // Test 1
    setStaticPerson1(): void {
        const person: Person = new Person('male', 'France', '', 25);
        this.personSubject?.next(person);
    }

    // Test 2
    setStaticPerson2(): void {
        const person: Person = new Person('female', 'Australia', '', 10);
        this.personSubject?.next(person);
    }

    setPerson(person: Person): void {
        this.personSubject?.next(person);
    }
}
