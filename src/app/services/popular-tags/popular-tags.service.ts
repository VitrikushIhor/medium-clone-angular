import {Injectable} from '@angular/core';
import {GetPopularTagsResponseInterface} from '../../types/popular-tags/get-popular-tags-response.interface';
import {APP_URL} from '../../../main';
import {map} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PopularTagsService {

  constructor(
    private http: HttpClient,
  ) {
  }

  getPopularTags() {
    return this.http.get<GetPopularTagsResponseInterface>(`${APP_URL}/tags`).pipe(map(res => {
      return res.tags
    }))
  }
}
