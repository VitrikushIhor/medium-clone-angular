import {Component, Input, OnInit} from '@angular/core';
import {BackendErrorsInterface} from '../../../types/beckend-erorrs/backend-errors.interface';

@Component({
  selector: 'app-backend-errors-message',
  templateUrl: './backend-errors-message.component.html',
  styleUrls: ['./backend-errors-message.component.scss'],
})
export class BackendErrorsMessageComponent implements OnInit {
  @Input() backendErrors!: BackendErrorsInterface
  errorMessages: string[] = [];

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrors).map((name) => {
      const message = this.backendErrors[name].join(', ')
      return `${name} ${message}`
    })
  }
}

