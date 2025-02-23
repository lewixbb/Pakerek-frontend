import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../../../core/services/user-api.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  constructor(private userApi: UserApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params
      .pipe(switchMap((params) => this.userApi.getUser(+params['id'])))
      .subscribe({
        next: (value) => {
          console.log(value);
        },
      });
  }
}
