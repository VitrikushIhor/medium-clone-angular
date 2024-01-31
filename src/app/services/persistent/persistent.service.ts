import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersistentService {

  constructor() {
  }

  set(key: string, data: any) {
    try {
      localStorage.setItem(key, JSON.stringify(data))
    } catch (e) {
      console.error('Failed to set in localStorage')
    }
  }

  get(key: string) {
    try {
      return JSON.parse(localStorage.getItem(key))
    } catch (e) {
      console.error('Failed to get from localStorage')
      return null
    }
  }

}
