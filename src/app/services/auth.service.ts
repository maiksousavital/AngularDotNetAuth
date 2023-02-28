import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BASE_URL } from '../constants/constants';  

import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}



  public register(user: User): Observable<any> {
    return this.http.post<any>(BASE_URL + 'Auth/Register', user);
  }

  public login(user: User): Observable<string> {
    return this.http.post(BASE_URL + 'Auth/Login', user, {responseType: 'text'});
  }

  public getUser(): Observable<string> {
    return this.http.get(BASE_URL + 'Auth',{responseType: 'text'});
  }

}
