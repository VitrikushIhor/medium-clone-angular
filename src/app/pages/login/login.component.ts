import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {BackendErrorsInterface} from '../../types/beckend-erorrs/backend-errors.interface';
import {select, Store} from '@ngrx/store';
import {AppStateInterface} from '../../types/app-state/app-state-interface';
import {loginAction} from '../../store/actions/login-action/login.action';
import {isSubmittingSelector, validationErrorSelector} from '../../store/selectors/auth/auth.selector';
import {LoginRequestInterface} from '../../types/login/login-request-interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup
  isSubmitting$!: Observable<boolean>
  backendErrors$!: Observable<BackendErrorsInterface | null>

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>,
  ) {
  }

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

  initializeForm() {
    this.form = this.fb.group({
      password: ['', Validators.required],
      email: ['', Validators.required],
    })
  }

  initializeValues() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorSelector))
  }

  onSubmit() {
    const request: LoginRequestInterface = {
      user: this.form.value,
    }
    this.store.dispatch(loginAction({request}))
    this.form.reset()
  }
}
