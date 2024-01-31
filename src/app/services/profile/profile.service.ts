import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {APP_URL} from '../../../main';
import {map} from 'rxjs';
import {GetUserResponseProfileInterface} from '../../types/profile/get-user-response-profile-interface';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {

  constructor(
    private http: HttpClient,
  ) {
  }


  getUserProfile(slug: string) {
    return this.http.get<GetUserResponseProfileInterface>(`${APP_URL}/profiles/${slug}`)
      .pipe(map(response => response.profile))
  }
}
