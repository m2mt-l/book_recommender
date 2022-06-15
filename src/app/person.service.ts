import { Injectable } from '@angular/core';
import { Observable, of, Subject, throwError } from 'rxjs';
import { Person } from '../app/model/person';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { catchError, retry, tap, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class PersonService {
    personSubject?: Subject<Person>;
    url: string = 'https://randomuser.me/api/?inc=gender,location,dob,picture';

    gender!: string;
    country!: string;
    imgUrl!: string;
    age!: number;

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

    setRandomPerson(): void {
        this.getRandomPerson().subscribe((data: any) => (this.gender = data.gender));
        this.getRandomPerson().subscribe((data: any) => (this.country = data.location.country));
        this.getRandomPerson().subscribe((data: any) => (this.imgUrl = data.picture.medium));
        this.getRandomPerson().subscribe((data: any) => (this.age = data.dob.age));

        const person: Person = new Person(this.gender, this.country, this.imgUrl, this.age);
        this.personSubject?.next(person);
    }

    getRandomPerson(): Observable<Person> {
        return this.http
            .get<Person>(this.url, { observe: 'body', responseType: 'json' })
            .pipe(map((data: any) => data.results[0]));
    }
}
