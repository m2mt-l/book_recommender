import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonInputComponent } from './person-input/person-input.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'person-input', component: PersonInputComponent },
    { path: 'book-list', component: BookListComponent },
    { path: 'book-detail', component: BookDetailComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
