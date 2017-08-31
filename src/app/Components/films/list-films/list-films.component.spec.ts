import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HttpModule} from '@angular/http';
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';

import {ListFilmsComponent} from './list-films.component';
import {FilmsService} from '../../../services/films.service';
import {Film} from '../film';
import configs from '../../../config/films';
import {By} from '@angular/platform-browser';

const MockFilmsArray: Array<Film> = configs.films

describe('ListFilmsComponent', () => {
    let component: ListFilmsComponent;
    let fixture: ComponentFixture<ListFilmsComponent>;
    let debugElement: DebugElement;
    let singleFilmEl: HTMLElement;
    let oneFilm: Film;
    let contatImgEl: HTMLElement;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            declarations: [ListFilmsComponent],
            providers: [FilmsService],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListFilmsComponent);
        component = fixture.componentInstance;
        oneFilm = MockFilmsArray[0]
        component.films = [oneFilm];
        fixture.detectChanges();
        singleFilmEl = fixture.debugElement.query(By.css('md-list md-list-item')).nativeElement;
        contatImgEl = fixture.debugElement.query(By.css('md-list md-list-item img')).nativeElement;
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });


    it('should be load film', () => {


        expect(singleFilmEl).toBeTruthy();
        expect(singleFilmEl.textContent).toContain(oneFilm.first_name);
    });

    it('should be load image', () => {
        expect(contatImgEl).toBeTruthy();
    });

    it('should be load films list', () => {
        component.films = MockFilmsArray;
        fixture.detectChanges();
        debugElement = fixture.debugElement.query(By.css('md-list'));
        let conatactList: HTMLElement = debugElement.nativeElement;

        expect(conatactList.textContent).toContain(MockFilmsArray[0].first_name);
        expect(conatactList.textContent).toContain(MockFilmsArray[1].first_name);
        expect(conatactList.textContent).toContain(MockFilmsArray[2].first_name);
        expect(conatactList.textContent).toContain(MockFilmsArray[3].first_name);
        expect(conatactList.textContent).toContain(MockFilmsArray[4].first_name);
    });

    it('should be destroy called', () => {
        spyOn(component.destroyFilmEvent, 'emit');
        component.destroy(MockFilmsArray[0]);
        expect(component.destroyFilmEvent.emit).toHaveBeenCalled();
        expect(component.destroyFilmEvent.emit).toHaveBeenCalledWith(MockFilmsArray[0]);
    });

    it('should be create called', () => {
        spyOn(component.changeViewEvent, 'emit');
        component.changeView();
        expect(component.changeViewEvent.emit).toHaveBeenCalled();
        expect(component.changeViewEvent.emit).toHaveBeenCalledWith(true);
    });
});



