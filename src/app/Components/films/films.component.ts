import {Component, OnInit} from '@angular/core';
import {Film} from './film';
import {FilmsService} from '../../services/films.service';
@Component({
    selector: 'app-films',
    templateUrl: './films.component.html',
    styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
    films: Array<Film> = [];
    isListView: Boolean;

    constructor(private filmService: FilmsService) {
    }

    /**
     * Initial runner
     */
    ngOnInit() {
        this.getFilms();
        this.isListView = true;
    }

    /**
     * Get all film and assing film array
     */
    getFilms() {
        this.filmService.getFilms()
            .then((films) => {
                this.films = films;
            });
        // .catch((err)=>{
        //   console.log('mad_msg__ err', err)
        // });
    }

    /**
     * Film creat
     * @param film
     * @returns {boolean}
     */
    create(film: Film) {
        this.filmService.create(film)
            .then((status) => {
                this.getFilms();
            });
        return true;
        // .catch((err)=>{
        //   console.log('mad_msg__ err', err)
        // });
    }

    /**
     * Film delete selected film
     * @param film
     */
    destroy(film: Film) {
        this.filmService.destroy(film)
            .then((status) => {
                this.getFilms();
            });
        // .catch((err)=>{
        //   console.log('mad_msg__ err', err)
        // });
    }

    /**
     * Toggle view (Film list view to add)
     */
    toggleView() {
        this.isListView = !this.isListView;
    }

}
