import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  merge,
  startWith,
  Subscription,
  switchMap,
} from 'rxjs';
import { UserData } from '../../../core/models/user.model';
import { UserApiService } from '../../../core/services/user-api.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-users-tab',
  templateUrl: './users-tab.component.html',
  styleUrls: ['./users-tab.component.scss'],
})
export class UsersTabComponent implements AfterViewInit, OnDestroy {
  displayedColumns: string[] = [
    'id',
    'email',
    'person.name',
    'person.surname',
    'role',
    'status',
    'detailsButton',
  ];
  dataSource!: MatTableDataSource<UserData>;
  totalCount = 0;
  filterValue = new FormControl('', { nonNullable: true });
  sub = new Subscription();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private userApi: UserApiService) {}

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
    this.sub.add(
      merge(this.sort.sortChange, this.paginator.page)
        .pipe(
          startWith({}),
          switchMap(() => {
            const pageIndex = this.paginator.pageIndex;
            const itemsPerPage = this.paginator.pageSize;
            const sortColumnName = this.sort.active;
            const sortDirection = this.sort.direction;
            return this.userApi.getUsers(
              pageIndex,
              itemsPerPage,
              sortColumnName,
              sortDirection
            );
          }),
          map((response) => {
            this.totalCount = response.totalElements;
            return response.users;
          })
        )
        .subscribe(
          (users) => {
            this.dataSource = new MatTableDataSource<UserData>(users);
          },
          (error) => {
            console.log(error);
          }
        )
    );

    this.sub.add(
      this.filterValue.valueChanges
        .pipe(debounceTime(900), distinctUntilChanged())
        .subscribe((value) => {
          const filterValue = value.trim();
          this.applyFilter(filterValue);
        })
    );
  }

  applyFilter(filterValue: string) {
    const pageIndex = this.paginator.pageIndex;
    const itemsPerPage = this.paginator.pageSize;
    const sortColumnName = this.sort.active;
    const sortDirection = this.sort.direction;

    this.userApi
      .getUsers(
        pageIndex,
        itemsPerPage,
        sortColumnName,
        sortDirection,
        filterValue
      )
      .subscribe({
        next: (response) => {
          this.totalCount = response.totalElements;
          this.dataSource = new MatTableDataSource<UserData>(response.users);
        },
      });

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addDataToDB() {
    this.userApi.addUsers().subscribe({
      next: (value) => console.log(value),
      error: (err) => console.log(err),
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
