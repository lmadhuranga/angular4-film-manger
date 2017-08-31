import {Film} from '../Components/films/film';
const MockFilm1: Film = <Film>{
    _id: '1',
    first_name: 'Rollins',
    last_name: 'Welch',
    email: 'rollinswelch@rodemco.com',
    phone: '8814262334'
};
const MockFilm2: Film = <Film>{
    _id: '2',
    first_name: 'Debora',
    last_name: 'Hickman',
    email: 'deborahickman@rodemco.com',
    phone: '8825852704'
};
const MockFilm3: Film = <Film>{
    _id: '3',
    first_name: 'Holder',
    last_name: 'Weiss',
    email: 'holderweiss@rodemco.com',
    phone: '8525793341'
};
const MockFilm4: Film = <Film>{
    _id: '4',
    first_name: 'Hensley',
    last_name: 'Eaton',
    email: 'hensleyeaton@rodemco.com',
    phone: '9274802669'
};
const MockFilm5: Film = <Film>{
    _id: '5',
    first_name: 'Dyer',
    last_name: 'Walker',
    email: 'dyerwalker@rodemco.com',
    phone: '8355193621'
};

const MockFilmesArray: Array<Film> = [MockFilm1, MockFilm2, MockFilm3, MockFilm4, MockFilm5];
export  default {
    films: MockFilmesArray
};
