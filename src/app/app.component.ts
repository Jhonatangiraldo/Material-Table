import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MdPaginator } from '@angular/material';
import { MdSort } from '@angular/material';
import { TableDataSource } from './material-components-folder/table-data-source.component';
import { PeopleService } from './services/people.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  displayedColumns = ['firstName', 'lastName', 'age', 'city'];
  dataPeople: {};
  subjectDataTable: Subject<{}> = new Subject;
  dataSource: TableDataSource;

  @ViewChild( MdPaginator ) paginator: MdPaginator;
  @ViewChild( MdSort ) sort: MdSort;
  @ViewChild( 'filter' ) filter: ElementRef;

 constructor( private peopleService: PeopleService ) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.peopleService.getPeople().subscribe( (result) => {
      this.subjectDataTable.next(result);
      this.dataPeople = { data: result, dataChange: this.subjectDataTable };
      this.getDataSource();
    });
  }

  getDataSource() {
    this.dataSource = new TableDataSource( this.dataPeople, this.paginator, this.sort );
  }

  filterKeyUp()  {
    if (!this.dataSource) { return; }
      this.dataSource.filter = this.filter.nativeElement.value;
  }

  addUser() {
    let age = Math.floor((Math.random() * 50) + 1);
    let user = { firstName: 'Ana', lastName: 'Anka', age: age, city: 'Anonymous' };
    this.dataSource.dataTable.data.unshift(user);
    this.renderData();
  }

  deleteUser() {
    this.dataSource.dataTable.data.shift();
    this.renderData();
  }

  renderData() {
     this.dataSource.dataTable.dataChange.next(this.dataSource.dataTable.data);
  }
}