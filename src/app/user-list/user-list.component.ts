import { UserService } from './../user.service';
import { Component, OnInit} from '@angular/core';
import { User } from '../models/user.model';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  users: User[] = [];

  constructor(private userService : UserService){

  }

  ngOnInit(): void {
    this.users = this.userService.getUser()
  }

}
