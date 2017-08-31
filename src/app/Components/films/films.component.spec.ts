import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpModule} from '@angular/http';
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import {ContactsService} from '../../services/films.service';
import {ContactsComponent} from './films.component';
import {Contact} from './film';
import configs from '../../config/films';

let MockContactesArray: Array<Contact> = configs.films;


describe('ContactsComponent', () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;
  let filmsService: ContactsService;
  let de: DebugElement;
  let films: Array<Contact>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, ReactiveFormsModule, FormsModule],
      declarations: [ContactsComponent],
      providers: [
        ContactsService,
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;
    filmsService = TestBed.get(ContactsService);
    spyOn(filmsService, 'getContacts').and.callFake(() => {
      return {
        then: function (callback) {
          return callback(MockContactesArray);
        }
      };
    });

    spyOn(filmsService, 'create').and.callFake(() => {
      return Promise.resolve(MockContactesArray[0]);
    });

    //fixture.detectChanges();

  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be called getContacts', () => {
    expect(component.films.length).toBe(0);
    component.getContacts();
    expect(component.films.length).toBe(5);

  });

  it('should be called to film save', async(() => {
    expect(component.create(MockContactesArray[0])).toBe(true);
    expect(filmsService.create).toHaveBeenCalledTimes(1);
    expect(filmsService.create).toHaveBeenCalledWith(MockContactesArray[0]);
  }));


  it('should be click toggleView shuould change value', async((done) => {
    fixture.detectChanges();
    expect(component.isListView).toBe(true);
    component.toggleView();
    expect(component.isListView).toBe(false);
  }));

});
