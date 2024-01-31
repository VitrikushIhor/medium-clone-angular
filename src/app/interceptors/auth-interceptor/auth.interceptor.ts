import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PersistentService} from '../../services/persistent/persistent.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private persistentService: PersistentService,
  ) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.persistentService.get('accessToken')
    request = request.clone({
      setHeaders: {
        Authorization: token ? `Token ${token}` : '',
      },
    })

    return next.handle(request);
  }
}
