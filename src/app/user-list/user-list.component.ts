import { UserService } from './../user.service';
import { Component, OnInit} from '@angular/core';
import { User } from '../models/user.model';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  userForm: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: [''],
      email: ['']
    });
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const newUser: User = this.userForm.value;
      this.userService.createUser(newUser).subscribe((user: User) => {
        this.users.push(user);
        this.userForm.reset();
      });
    }
  }
}
