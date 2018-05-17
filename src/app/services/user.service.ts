import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) {}

    getUsers() {
       return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb');
    }
}
