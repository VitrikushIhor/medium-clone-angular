import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, of, switchMap} from 'rxjs';
import {FavoritesService} from '../../../services/favorites/favorites.service';
import {
  addToFavoritesAction,
  addToFavoritesActionFailure,
  addToFavoritesActionSuccess,
} from '../../actions/favorites/add-to-favorites-action';

@Injectable({
  providedIn: 'root',
})
export class AddToFavoritesEffect {

  constructor(
    private actions$: Actions,
    private favoritesService: FavoritesService,
  ) {
  }

  addToFavorites$ = createEffect(() =>
    this.actions$.pipe(ofType(addToFavoritesAction),
      switchMap(({isFavorited, slug}) => {

        const article$ = isFavorited ?
          this.favoritesService.removeFromFavorites(slug)
          : this.favoritesService.addToFavorites(slug)

        return article$.pipe(
          map((article) => {
            return addToFavoritesActionSuccess({article})
          }),

          catchError(() => {
            return of(addToFavoritesActionFailure())
          }),
        )
      }),
    ))
}
