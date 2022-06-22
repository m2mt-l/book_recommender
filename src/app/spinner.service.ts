import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class SpinnerService {
    isLoading: Subject<boolean> = new Subject<boolean>();

    constructor() {}

    show(): void {
        this.isLoading.next(true);
    }

    hide(): void {
        this.isLoading.next(false);
    }
}
