import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Person } from '../app/model/person';
import { HttpClient } from '@angular/common/http';

export interface Config {
    gender: string;
    country: string;
    age: number;
    imageURL: string;
}
@Injectable({
    providedIn: 'root',
})
export class PersonService {
    personSubject?: Subject<Person>
    url: string = 'https://randomuser.me/api/?inc=gender,location,dob,picture';

    constructor(private http: HttpClient) {
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

    setRandomPerson(): Observable<any>{
        return this.http.get(this.url, { observe: 'body', responseType: 'json' });
    }
}
