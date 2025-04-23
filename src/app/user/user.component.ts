import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../model/user';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { VerifiedPipe } from '../pipes/verified.pipe';
import { UserStatusPipe } from '../pipes/user-status.pipe';
import { LayoutComponent } from "../layout/layout.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [HttpClientModule, DatePipe, VerifiedPipe, UserStatusPipe, LayoutComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{

  usersList!: User[];

  constructor(private service: UsersService){

  }
  ngOnInit(): void {
    this.LoadUsers();
  }

  LoadUsers(){
    this.service.LoadUsers().subscribe(item=>{
      
      this.usersList=item;
      // localStorage.setItem('usersList', JSON.stringify(this.usersList));
    })
  }

  addUser(){
    let newUser: User = {id: 4,
        name:"Alice Johnson",
        email:"alice@example.com",
        role: "admin",
        status: "active",
        createdAt: new Date,
        lastLogin: new Date,
        isEmailVerified: true,
        avatarUrl: "https://i.pravatar.cc/100?img=1"};

        this.usersList.push(newUser);

  }

  // filterUser(value: string) {
  //   this.usersList = this.usersList.filter((item) => item.status === 'banned')
  // }

  
}
