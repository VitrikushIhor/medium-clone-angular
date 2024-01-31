import {Injectable} from '@angular/core';
import {RegisterRequestInterface} from '../../types/user/register-request-interface';
import {HttpClient} from '@angular/common/http';
import {APP_URL} from '../../../main';
import {AuthResponseInterface} from '../../types/auth/auth-response-interface';
import {map} from 'rxjs';
import {LoginRequestInterface} from '../../types/login/login-request-interface';
import {CurrentUserInputInterface} from '../../types/auth/current-user-input-interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) {
  }


  getUser(response: AuthResponseInterface) {
    return response.user
  }


  register(data: RegisterRequestInterface) {
    return this.http.post<AuthResponseInterface>(`${APP_URL}/users`, data)
      .pipe(map(this.getUser))
  }

  login(data: LoginRequestInterface) {
    return this.http.post<AuthResponseInterface>(`${APP_URL}/users/login`, data)
      .pipe(map(this.getUser))
  }

  getCurrentUser() {
    return this.http.get(`${APP_URL}/user`)
      .pipe(map(this.getUser))
  }

  updateCurrentUser(currentUserInput: CurrentUserInputInterface) {
    return this.http.put(`${APP_URL}/user`, currentUserInput)
      .pipe(map(this.getUser))
  }
}
