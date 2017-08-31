import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http'; // IMPORTANT::
import {FormsModule, FormBuilder, ReactiveFormsModule} from '@angular/forms'; // IMPORTANT::
import {RouterModule, Routes} from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MdButtonModule,
    MdCheckboxModule,
    MdListModule,
    MdToolbarModule,
    MdDialogModule,
    MdInputModule
} from '@angular/material';
import 'hammerjs';

// Services
import {FilmsService} from './services/films.service';

// Components
import {AppComponent} from './app.component';
import {ListFilmsComponent} from './Components/films/list-films/list-films.component';
import {FilmsComponent} from './Components/films/films.component';
import {CreateFilmComponent} from './Components/films/add-film/add-film.component';

//
const appRoutes: Routes = [
    {path: '', component: FilmsComponent},
    {path: 'create', component: CreateFilmComponent},
]

@NgModule({
    declarations: [
        AppComponent,
        ListFilmsComponent,
        FilmsComponent,
        CreateFilmComponent,
    ],
    imports: [
        HttpModule,
        FormsModule,
        BrowserModule,
        ReactiveFormsModule,
        // Material Design
        BrowserAnimationsModule,
        MdButtonModule,
        MdListModule,
        MdToolbarModule,
        MdInputModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        MdButtonModule,
        MdListModule,
        MdToolbarModule,
        MdInputModule
    ],
    providers: [FilmsService, FormBuilder],
    bootstrap: [AppComponent]
})
export class AppModule {
}
