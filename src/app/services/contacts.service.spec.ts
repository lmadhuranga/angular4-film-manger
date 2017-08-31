import {TestBed, inject, getTestBed} from '@angular/core/testing';
import {BaseRequestOptions, ConnectionBackend, Http, RequestOptions, Response, ResponseOptions} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {Observable} from 'rxjs';

import {FilmsService} from './films.service';
import {Film} from '../Components/films/film';
import configs from '../config/films';
import {log} from "util";

let MockFilmesArray: Array<Film> = configs.films

let mockBackend: MockBackend;
let filmsService: FilmsService;
let setup = (httpMock) => {
  TestBed.configureTestingModule({
    providers: [
      FilmsService,
      MockBackend,
      BaseRequestOptions,
      {
        provide: Http,
        useFactory: (backend: MockBackend, options: BaseRequestOptions) => new httpMock(backend, options),
        deps: [MockBackend, BaseRequestOptions]
      }
    ]
  });
  inject([MockBackend, Http],
    (mb: MockBackend, http: Http) => {
      mockBackend = mb;
      filmsService = new FilmsService(http);
    })();
};

describe('FilmsService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [FilmsService, ConnectionBackend, Http]
    });
  });

  it('should return the Contacs array', (done) => {
    setup(MockSuccessGetContacsHttp);
    filmsService.getFilms().then((films:any) => {
      expect(films).toEqual(MockFilmesArray);
      done();
    });
  });

  it('should return the hero based on passed in id from the promise when it succeeds', (done) => {
    setup(MockSuccessGetContacsHttp);

    filmsService.getFilm(MockFilmesArray[0]).then((film) => {
      expect(film).toEqual(MockFilmesArray[0]);
      done();
    });
  });

});

class MockSuccessGetContacsHttp extends Http {
  constructor(backend, options) {
    super(backend, options);
  }

  get() {
    return Observable.from([new Response(new ResponseOptions({body: MockFilmesArray}))]);
  }
}
