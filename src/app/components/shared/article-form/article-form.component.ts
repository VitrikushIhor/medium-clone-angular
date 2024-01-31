import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ArticleInputInterface} from '../../../types/articles/article-input-interface';
import {BackendErrorsInterface} from '../../../types/beckend-erorrs/backend-errors.interface';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent implements OnInit {
  @Input() initialValues: ArticleInputInterface
  @Input() isSubmitting: boolean
  @Input() errors: BackendErrorsInterface | null

  @Output() articleSubmit = new EventEmitter<ArticleInputInterface>();

  form: FormGroup

  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(): void {
    this.form = this.fb.group({
      title: this.initialValues.title,
      description: this.initialValues.description,
      body: this.initialValues.body,
      tagList: this.initialValues.tagList.join(' '),
    })
  }

  onSubmit(): void {
    this.articleSubmit.emit(this.form.value)
  }
}
