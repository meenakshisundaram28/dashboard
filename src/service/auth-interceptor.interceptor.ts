import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiserviceService } from './apiservice.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private api: ApiserviceService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.api.getToken();
    const role = this.api.getUser();
    console.log(token,role)
    if (token && role) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
          Role: role,
        }
      });
    }

    return next.handle(req);
  }
}
