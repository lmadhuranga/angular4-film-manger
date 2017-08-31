import {Component, Output, EventEmitter} from '@angular/core';
import {Film} from '../film';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class CreateFilmComponent {
  createForm: FormGroup;

  @Output() createNewFilmEvent = new EventEmitter();
  @Output() changeViewEvent = new EventEmitter();

  newFilm = new Film();

  constructor(fb: FormBuilder) {
    this.createForm = fb.group({
      first_name: [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])],
      last_name: [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      phone: [null, Validators.compose([Validators.required, Validators.minLength(9), Validators.maxLength(13), Validators.pattern("[0-9]+")])],
    });
  }

  /**
   * Create film
   *
   * @param film:Film
   */
  create(film) {
    this.createNewFilmEvent.emit(film);
    this.newFilm = new Film();
    // Open film list page
    this.changeView();
  }

  changeView() {
    this.changeViewEvent.emit(true);
  }
}
