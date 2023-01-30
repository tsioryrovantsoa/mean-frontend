import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthenticationClient } from '../clients/authentification.client';

@Injectable({
  providedIn: 'root'
})

export class AuthentificationFinancierService {
  private tokenKey = 'tokenFinancier';

  constructor(
    private authenticationClient: AuthenticationClient,
    private router: Router
  ) {}

  public login(username: string, password: string): Observable<any> {
    return this.authenticationClient.loginFinancier(username, password).pipe(map(data => data ))
  }

  // public register(username: string, email: string, password: string): void {
  //   this.authenticationClient
  //     .register(username, email, password)
  //     .subscribe((token) => {
  //       localStorage.setItem(this.tokenKey, token);
  //       this.router.navigate(['/']);
  //     });
  // }

  public logout() {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login-atelier']);
  }

  public isLoggedIn(): boolean {
    let token = localStorage.getItem(this.tokenKey);
    return token != null && token.length > 0;
  }

  public getToken(): string | null {
    return this.isLoggedIn() ? localStorage.getItem(this.tokenKey) : null;
  }

  public getTokenKey(): string {
    return this.tokenKey;
  }
}