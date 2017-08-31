import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA, DebugElement} from '@angular/core';
import {HttpModule} from '@angular/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import {CreateFilmComponent} from './add-film.component';
import {FilmsService} from '../../../services/films.service';
import {Film} from '../film';
import config from '../../../config/films';
import {By} from '@angular/platform-browser';

const MockFilmsArray: Array<Film> = config.films

describe('CreateFilmComponent', () => {
    let component: CreateFilmComponent;
    let fixture: ComponentFixture<CreateFilmComponent>;
    let headerHtmlElement: HTMLElement;
    let createButnHtmlElement: HTMLElement;
    // const formInputHtmlElement: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule, ReactiveFormsModule, FormsModule],
            declarations: [CreateFilmComponent],
            providers: [
                FilmsService,
            ],
            schemas: [NO_ERRORS_SCHEMA]

        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CreateFilmComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        headerHtmlElement = fixture.debugElement.query(By.css('md-toolbar span')).nativeElement;
        createButnHtmlElement = fixture.debugElement.query(By.css('.add-film-form .add-film-submit')).nativeElement;
    });

    fit('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should be Title loaded Add New Film', () => {
        expect(headerHtmlElement.textContent).toContain('Add New Film')
    });

    it('should be Create Film click and funciton call', () => {
        expect(createButnHtmlElement).toBeTruthy();
        expect(createButnHtmlElement.textContent).toContain('Create Film');
    });


    it('should be create called', () => {
        spyOn(component.createNewFilmEvent, 'emit');

        component.create(MockFilmsArray[0]);

        expect(component.createNewFilmEvent.emit).toHaveBeenCalled();
        expect(component.createNewFilmEvent.emit).toHaveBeenCalledTimes(1);
        expect(component.createNewFilmEvent.emit).toHaveBeenCalledWith(MockFilmsArray[0]);
    });


    it('should be create called then shuold be call changeView', () => {
        spyOn(component.createNewFilmEvent, 'emit');
        spyOn(component.changeViewEvent, 'emit');

        component.create(MockFilmsArray[0]);
        expect(component.changeViewEvent.emit).toHaveBeenCalled();
        expect(component.changeViewEvent.emit).toHaveBeenCalledWith(true);
    });
});
