import {AuthStateInterface} from '../auth/auth-state-interface';
import {FeedStateInterface} from '../feed/feed-state-interface';
import {PopularTagsStateInterface} from '../popular-tags/popular-tags-state-interface';
import {ArticleStateInterface} from '../articles/article-state-interface';
import {CreateArticleStateInterface} from '../articles/create-article-state-interface';
import {UpdateArticleStateInterface} from '../articles/update-article-interface';
import {SettingsStateInterface} from '../settings/settings-state-interface';
import {ProfileStateInterface} from '../profile/profile-state-interface';

export interface AppStateInterface {
  auth: AuthStateInterface
  feed: FeedStateInterface
  popularTags: PopularTagsStateInterface
  article: ArticleStateInterface
  createArticle: CreateArticleStateInterface
  updateArticle: UpdateArticleStateInterface
  settings: SettingsStateInterface
  profile: ProfileStateInterface
}
