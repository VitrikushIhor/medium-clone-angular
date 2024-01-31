import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {APP_URL} from '../../../main';
import {GetArticleResponseInterface} from '../../types/articles/get-article-response-interface';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {

  constructor(
    private http: HttpClient,
  ) {
  }

  getArticle(res: GetArticleResponseInterface) {
    return res.article
  }
  addToFavorites(slug: string) {
    return this.http.post(`${APP_URL}/articles/${slug}/favorite`, {})
      .pipe(map(this.getArticle))

  }

  removeFromFavorites(slug: string) {
    return this.http.delete(`${APP_URL}/articles/${slug}/favorite`, {})
      .pipe(map(this.getArticle))
  }


}
