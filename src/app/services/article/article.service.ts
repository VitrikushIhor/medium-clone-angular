import {Injectable} from '@angular/core';
import {APP_URL} from '../../../main';
import {HttpClient} from '@angular/common/http';
import {GetArticleResponseInterface} from '../../types/articles/get-article-response-interface';
import {map} from 'rxjs';
import {ArticleInputInterface} from '../../types/articles/article-input-interface';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {

  constructor(
    private http: HttpClient,
  ) {
  }

  getArticle(slug: string) {
    return this.http.get<GetArticleResponseInterface>(`${APP_URL}/articles/${slug}`)
      .pipe(map(response => response.article))
  }

  deleteArticle(slug: string) {
    return this.http.delete(`${APP_URL}/articles/${slug}`)
  }

  createArticle(body: ArticleInputInterface) {
    return this.http.post<{ article: ArticleInputInterface }>(`${APP_URL}/articles`, body)
      .pipe(map(response => response.article))

  }

  updateArticle(slug: string, body: ArticleInputInterface) {
    return this.http.put<{ article: ArticleInputInterface }>(`${APP_URL}/articles/${slug}`, body)
      .pipe(map(response => response.article))

  }
}
