import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './pages/register/register.component';
import {LoginComponent} from './pages/login/login.component';
import {GlobalFeedComponent} from './components/global-feed/global-feed.component';
import {YourFeedComponent} from './components/your-feed/your-feed.component';
import {TagFeedComponent} from './components/tag-feed/tag-feed.component';
import {ArticleComponent} from './components/article/article.component';
import {CreateArticleComponent} from './pages/create-article/create-article.component';
import {SettingsComponent} from './pages/settings/settings.component';
import {ProfileComponent} from './pages/profile/profile.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: GlobalFeedComponent},
  {path: 'feed', component: YourFeedComponent},
  {path: 'tags/:slug', component: TagFeedComponent},
  {path: 'articles/new', component: CreateArticleComponent},
  {path: 'articles/:slug', component: ArticleComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'profile/:slug', component: ProfileComponent},
  {path: 'profile/:slug/favorites', component: ProfileComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
