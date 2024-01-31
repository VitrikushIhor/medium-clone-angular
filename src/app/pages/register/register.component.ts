import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {RegisterAction} from '../../store/actions/register-action/register.action';
import {Observable} from 'rxjs';
import {AppStateInterface} from '../../types/app-state/app-state-interface';
import {isSubmittingSelector, validationErrorSelector} from '../../store/selectors/auth/auth.selector';
import {RegisterRequestInterface} from '../../types/user/register-request-interface';
import {BackendErrorsInterface} from '../../types/beckend-erorrs/backend-errors.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
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

  initializeValues() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorSelector))
  }

  initializeForm() {
    this.form = this.fb.group({
      password: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
    })
  }

  onSubmit() {
    const request: RegisterRequestInterface = {
      user: this.form.value,
    }
    this.store.dispatch(RegisterAction({request}))
    this.form.reset()
  }
}
