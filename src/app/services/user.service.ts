import { Injectable } from '@angular/core';
import {User} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  userData: User = {
    id: "admin",
    password: "admin"
}

  login (userName:string, pass:string): Boolean {

    if (userName == User.name && pass == User.password) {
      return true;
    } else {
      return false;
    }

  }

}
