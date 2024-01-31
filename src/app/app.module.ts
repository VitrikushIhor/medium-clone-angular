import {isDevMode, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RegisterComponent} from './pages/register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {authReducer} from './store/reucers/auth/auth.reducer';
import {EffectsModule} from '@ngrx/effects';
import {RegisterEffect} from './store/effects/register/register.effect';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {
  BackendErrorsMessageComponent,
} from './components/shared/backend-errors-message/backend-errors-message.component';
import {LoginComponent} from './pages/login/login.component';
import {LoginEffect} from './store/effects/login/login.effect';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {GetCurrentUserEffect} from './store/effects/get-current-user/get-current-user.effect';
import {AuthInterceptor} from './interceptors/auth-interceptor/auth.interceptor';
import {PersistentService} from './services/persistent/persistent.service';
import {GlobalFeedComponent} from './components/global-feed/global-feed.component';
import {FeedComponent} from './components/shared/feed/feed.component';
import {GetFeedEffect} from './store/effects/feed/get-feed.effect';
import {feedReducer} from './store/reucers/feed/feed.reducer';
import {BannerComponent} from './components/shared/banner/banner.component';
import {ErrorMessageComponent} from './components/shared/error-message/error-message.component';
import {LoadingComponent} from './components/shared/loading/loading.component';
import {PaginationComponent} from './components/shared/pagination/pagination.component';
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {TagsListComponent} from './components/shared/tags-list/tags-list.component';
import {PopularTagsComponent} from './components/shared/popular-tags/popular-tags.component';
import {popularTagsReducer} from './store/reucers/popular-tags/popular-tags.reducer';
import {GetPopularTagsEffect} from './store/effects/get-popular-tags/get-popular-tags.effect';
import {ToggleFeedComponent} from './components/shared/toggle-feed/toggle-feed.component';
import {YourFeedComponent} from './components/your-feed/your-feed.component';
import {TagFeedComponent} from './components/tag-feed/tag-feed.component';
import {ArticleComponent} from './components/article/article.component';
import {articleReducer} from './store/reucers/article/article.reducer';
import {GetArticleEffect} from './store/effects/article/get-article.effect';
import {DeleteArticleEffect} from './store/effects/article/delete-article.effect';
import {CreateArticleComponent} from './pages/create-article/create-article.component';
import {ArticleFormComponent} from './components/shared/article-form/article-form.component';
import {CreateArticleEffect} from './store/effects/article/create-article.effect';
import {createArticleReducer} from './store/reucers/article/create-article.reducer';
import {EditArticleComponent} from './pages/edit-article/edit-article.component';
import {UpdateArticleEffect} from './store/effects/article/update-article.effect';
import {FetchArticleEffect} from './store/effects/article/fetch-article.effect';
import {updateArticleReducer} from './store/reucers/article/update.reducer';
import {UpdateCurrentUserEffect} from './store/effects/update-current-user/update-current-user.effect';
import {settingsReducer} from './store/reucers/settings/settings.reducer';
import {SettingsComponent} from './pages/settings/settings.component';
import {AddToFavoritesComponent} from './components/shared/add-to-favorites/add-to-favorites.component';
import {AddToFavoritesEffect} from './store/effects/favorites/add-to-favorites-effect';
import {ProfileComponent} from './pages/profile/profile.component';
import {GetProfileEffect} from './store/effects/profile/get-profile.effect';
import {profileReducer} from './store/reucers/profile/profile.reducer';

const reducers = {
  auth: authReducer,
  feed: feedReducer,
  router: routerReducer,
  popularTags: popularTagsReducer,
  article: articleReducer,
  createArticle: createArticleReducer,
  updateArticle: updateArticleReducer,
  settings: settingsReducer,
  profile: profileReducer,
}

@NgModule({
  declarations: [
    AppComponent,
    CreateArticleComponent,
    RegisterComponent,
    BackendErrorsMessageComponent,
    LoginComponent,
    NavBarComponent,
    GlobalFeedComponent,
    FeedComponent,
    BannerComponent,
    ErrorMessageComponent,
    LoadingComponent,
    PaginationComponent,
    TagsListComponent,
    PopularTagsComponent,
    ToggleFeedComponent,
    YourFeedComponent,
    TagFeedComponent,
    ArticleComponent,
    ArticleFormComponent,
    EditArticleComponent,
    SettingsComponent,
    AddToFavoritesComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forRoot([
      RegisterEffect,
      LoginEffect,
      GetCurrentUserEffect,
      GetFeedEffect,
      GetPopularTagsEffect,
      GetArticleEffect,
      DeleteArticleEffect,
      CreateArticleEffect,
      UpdateArticleEffect,
      FetchArticleEffect,
      UpdateCurrentUserEffect,
      AddToFavoritesEffect,
      GetProfileEffect,
    ]),
    StoreModule.forRoot(reducers),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
    }),
  ],
  providers: [
    PersistentService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
