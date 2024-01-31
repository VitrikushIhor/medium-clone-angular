import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppStateInterface} from '../../../types/app-state/app-state-interface';
import {addToFavoritesAction} from '../../../store/actions/favorites/add-to-favorites-action';

@Component({
  selector: 'app-add-to-favorites',
  templateUrl: './add-to-favorites.component.html',
  styleUrls: ['./add-to-favorites.component.scss'],
})
export class AddToFavoritesComponent implements OnInit {
  @Input('isFavorite') isFavoriteProps: boolean
  @Input('articleSlug') articleSlugProps: string
  @Input('favoritesCount') favoritesCountProps: number
  favoritesCount: number
  isFavorited: boolean

  constructor(
    private store: Store<AppStateInterface>,
  ) {
  }

  ngOnInit(): void {
    this.initializeValues()
  }

  handleLike() {
    this.store.dispatch(addToFavoritesAction({isFavorited: this.isFavorited, slug: this.articleSlugProps}))
    if (this.isFavorited) {
      this.favoritesCount = this.favoritesCount - 1
    } else {
      this.favoritesCount = this.favoritesCount + 1
    }
    this.isFavorited = !this.isFavorited
  }


  initializeValues() {
    this.favoritesCount = this.favoritesCountProps
    this.isFavorited = this.isFavoriteProps
  }
}
