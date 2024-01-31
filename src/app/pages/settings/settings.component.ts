import {Component, OnDestroy, OnInit} from '@angular/core';
import {CurrentUserInterface} from '../../types/user/current-user-interface';
import {filter, Observable, Subject, takeUntil} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppStateInterface} from '../../types/app-state/app-state-interface';
import {currentUserSelector} from '../../store/selectors/auth/auth.selector';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BackendErrorsInterface} from '../../types/beckend-erorrs/backend-errors.interface';
import {settingsErrorSelector, settingsIsSubmittingSelector} from '../../store/selectors/settings/settings.selector';
import {updateCurrentUserAction} from '../../store/actions/update-current-user/update-current-user.action';
import {logoutAction} from '../../store/actions/login-action/login.action';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit, OnDestroy {

  currentUser: CurrentUserInterface
  destroy$: Subject<boolean> = new Subject<boolean>();
  form: FormGroup
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<BackendErrorsInterface | null>

  constructor(
    private store: Store<AppStateInterface>,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
    this.initializeForm()
  }

  ngOnDestroy(): void {
    this.destroy$.next(true)
    this.destroy$.unsubscribe()
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      image: this.currentUser.image,
      username: this.currentUser.username,
      bio: this.currentUser.bio,
      email: this.currentUser.email,
      password: '',
    })
  }

  private initializeListeners() {
    this.store.select(currentUserSelector)
      .pipe(
        takeUntil(this.destroy$),
        filter(Boolean),
      )
      .subscribe((data) => {
        this.currentUser = data
      })
  }

  private initializeValues() {
    this.isSubmitting$ = this.store.pipe(select(settingsIsSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(settingsErrorSelector))
  }

  onSubmit() {
    this.store.dispatch(updateCurrentUserAction({...this.currentUser, ...this.form.value}))
  }

  logout() {
    this.store.dispatch(logoutAction())
  }
}
