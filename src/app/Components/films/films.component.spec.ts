import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpModule} from '@angular/http';
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import {FilmsService} from '../../services/films.service';
import {FilmsComponent} from './films.component';
import {Film} from './film';
import configs from '../../config/films';




describe('FilmsComponent', () => {
  let component: FilmsComponent;
  let fixture: ComponentFixture<FilmsComponent>;
  let filmsService: FilmsService;
  let de: DebugElement;
  let films: Array<Film>;
  const MockFilmsArray: Array<Film> = configs.films;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, ReactiveFormsModule, FormsModule],
      declarations: [FilmsComponent],
      providers: [
        FilmsService,
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsComponent);
    component = fixture.componentInstance;
    filmsService = TestBed.get(FilmsService);
    spyOn(filmsService, 'getFilms').and.callFake(() => {
      return {
        then: function (callback) {
          return callback(MockFilmsArray);
        }
      };
    });

    spyOn(filmsService, 'create').and.callFake(() => {
      return Promise.resolve(MockFilmsArray[0]);
    });

    // fixture.detectChanges();

  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be called getFilms', () => {
    expect(component.films.length).toBe(0);
    component.getFilms();
    expect(component.films.length).toBe(5);

  });

  it('should be called to film save', async(() => {
    expect(component.create(MockFilmsArray[0])).toBe(true);
    expect(filmsService.create).toHaveBeenCalledTimes(1);
    expect(filmsService.create).toHaveBeenCalledWith(MockFilmsArray[0]);
  }));


  it('should be click toggleView shuould change value', async((done) => {
    fixture.detectChanges();
    expect(component.isListView).toBe(true);
    component.toggleView();
    expect(component.isListView).toBe(false);
  }));

});
