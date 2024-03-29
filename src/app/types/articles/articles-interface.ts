import {ProfileInterface} from '../profile/profile-interface';

export interface ArticlesInterface {
  author: ProfileInterface
  body: string
  createdAt: string
  description: string
  favorited: boolean
  favoritesCount: number
  slug: string
  tagList: string[]
  title: string
  updatedAt: string
}
