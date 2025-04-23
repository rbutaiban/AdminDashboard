import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  
    LoadUsers() {
      return this.http.get<User[]>("http://localhost:3000/USERS");
    }
}
