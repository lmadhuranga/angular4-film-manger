import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {Film} from '../Components/films/film';
import 'rxjs';


@Injectable()
export class FilmsService {
    film: Film;
    host: string

    constructor(private http: Http) {
        this.host = 'http://localhost:1337/contacts';
    }

    /**
     * Create funtion
     * @param film
     * @returns {Promise<T>}
     */
    create(film: Film) {
        return this.http.post(`${this.host}`, film)
            .map(data => data.json()).toPromise();
    }

    /**
     * Delete given film
     * @param film
     * @returns {Promise<T>}
     */
    destroy(film: Film) {
        return this.http.delete(`${this.host}/${film._id}`)
            .map(data => data.json()).toPromise();
    }

    // TODO:: remove
    update(film: Film) {
        return this.http.put(`${this.host}/${film._id}`, film)
            .map(data => data.json()).toPromise();
    }

    /**
     * Update given film id with new film details
     * @param film
     * @returns {Promise<T>}
     */
    getFilm(film: Film) {
        return this.getFilms()
            .then(contacs => contacs.find(eFilm => eFilm._id === film._id));
    }

    /**
     * Get all film details
     * @returns {Promise<T>}
     */
    getFilms() {
        return this.http.get(`${this.host}`)
            .map(data => data.json()).toPromise();
    }
}
