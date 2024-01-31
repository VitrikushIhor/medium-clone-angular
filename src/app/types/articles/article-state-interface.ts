import {ArticlesInterface} from './articles-interface';

export interface ArticleStateInterface {
  isLoading: boolean
  error: string | null
  data: ArticlesInterface | null
}
