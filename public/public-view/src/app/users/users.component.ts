import { Component, OnInit } from '@angular/core';
import { CoreHttpService } from '../common/core/core-http.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(
    private coreHttpService: CoreHttpService
  ) { }

  ngOnInit() {
  }
  click() {
    this.coreHttpService.get('users').subscribe((data) => console.log(data, 333333));
  }
}
