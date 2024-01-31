import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {APP_URL} from '../../../main';
import {GetFeedResponseInterface} from '../../types/feed/get-feed-response-interface';

@Injectable({
  providedIn: 'root',
})
export class FeedService {

  constructor(
    private http: HttpClient,
  ) {
  }


  getFeed(url: string) {
    return this.http.get<GetFeedResponseInterface>(`${APP_URL}/${url}`)
  }
}
