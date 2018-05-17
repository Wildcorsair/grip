import { Component } from '@angular/core';
import { UserService } from "../services/user.service";

interface IUser {
  results: any[];
  info: any[];
}

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.sass']
})

export class HomeComponent {
  users = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((data: IUser) => {
      data.results.map(item => {
        this.users.push(item);
      });
    });
  }
}
