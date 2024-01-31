import {ArticlesInterface} from '../articles/articles-interface';

export interface GetFeedResponseInterface {
  articles: ArticlesInterface[]
  articlesCount: number
}
