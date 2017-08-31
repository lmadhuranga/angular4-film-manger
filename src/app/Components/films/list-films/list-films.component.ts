import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Film} from '../film';

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrls: ['./list-films.component.css']
})
export class ListFilmsComponent implements OnInit {

  constructor() {}

  @Input() films;
  @Output() destroyFilmEvent = new EventEmitter();
  @Output() changeViewEvent = new EventEmitter();

  ngOnInit() {
  }

  /**
   * Delete single film
   * @param film
   */
  destroy(film: Film) {
    this.destroyFilmEvent.emit(film);
  }

  /**
   * Togllge the view (Films List view to Create Film)
   */
  changeView() {
    this.changeViewEvent.emit(true);
  }
}
