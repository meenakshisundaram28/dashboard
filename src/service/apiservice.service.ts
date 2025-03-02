import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
 private apiUrl = 'http://localhost:3000/users'; 
 private id : any;
  constructor(private http: HttpClient) { }

   login(value:any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, value);
  }

  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}`); 
  }

  setValue(value: any) {
    this.id = value;
  }

  getValue(): any {
    return this.id;
  }

  
  setToken(token: string): void {
    localStorage.setItem('authToken', token); 
  }

  
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  setUser(value:string):void{
     localStorage.setItem('userRole', value)
  }

  getUser(): string | null {
    return localStorage.getItem('userRole');
  }

  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
