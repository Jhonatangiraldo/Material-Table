import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class PeopleService {

  people: {} = [
    { firstName: 'Waylon', lastName: 'Dalton', age: '12', city: 'New York' },
    { firstName: 'Justine', lastName: 'Henderson', age: '34', city: 'Venice' },
    { firstName: 'Abdullah', lastName: 'Lang', age: '34', city: 'Hong Kong' },
    { firstName: 'Marcus', lastName: 'Cruz', age: '23', city: 'Hong Kong' },
    { firstName: 'Thalia', lastName: 'Cobb', age: '12', city: 'London' },
    { firstName: 'Mathias', lastName: 'Little', age: '23', city: 'Chefchaouen' },
    { firstName: 'Eddie', lastName: 'Randolph', age: '43', city: 'Paris' },
    { firstName: 'Angela', lastName: 'Walker', age: '43', city: 'Amsterdam' },
    { firstName: 'Lia', lastName: 'Shelton', age: '34', city: 'Petersburg' },
    { firstName: 'Hadassah', lastName: 'Hartman', age: '34', city: 'Beirut' },
    { firstName: 'Joanna', lastName: 'Shaffer', age: '12', city: 'Kyoto' },
    { firstName: 'Jonathon', lastName: 'Sheppard', age: '87', city: 'Queenstown' },
    { firstName: 'Enzo', lastName: ' Brandt', age: '45', city: 'Barcelona' },
    { firstName: 'Bo', lastName: 'Shannon', age: '23', city: 'Singapore' },
    { firstName: 'Crystal', lastName: 'Sharp', age: '34', city: 'Havana' },
    { firstName: 'Richard', lastName: 'Ramos', age: '76', city: 'Florence' },
    { firstName: 'Caiden', lastName: 'Cross', age: '45', city: 'Sydney' },
    { firstName: 'Tanner', lastName: 'Hughes', age: '76', city: 'Lisbon' },
    { firstName: 'Darion', lastName: 'Green', age: '21', city: 'Jaipur' },
    { firstName: 'Marquise', lastName: 'Obrien', age: '45', city: 'Lucerne' },
    { firstName: 'Lennon', lastName: 'Dougherty', age: '23', city: 'Shanghai' },
    { firstName: 'Deanna', lastName: 'Strong', age: '03', city: 'Rome' },
    { firstName: 'Carlee', lastName: 'Hester', age: '04', city: 'Bruges' },
    { firstName: 'Kellen', lastName: 'Owens', age: '25', city: 'Stockholm' },
  ];

  constructor() { }

  getPeople(): Observable<any[]> {
    return Observable.create( (observable) => {
      observable.next(this.people);
    });
  }

}
