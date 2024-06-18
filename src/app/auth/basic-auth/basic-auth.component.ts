import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';

@Component({
  selector: 'app-basic-auth',
  templateUrl: './basic-auth.component.html',
  styleUrl: './basic-auth.component.css'
})
export class BasicAuthComponent {

  constructor(private fb: FormBuilder, 
              private http: HttpClient, 
              private authService: AuthService,
              private router: Router
            ) {}

  form_auth = this.fb.group({
    'username': ['', Validators.required],
    'password': ['', Validators.required]
  })

  get user() {
    return this.form_auth.get('username') as FormControl
  }

  get password() {
    return this.form_auth.get('password') as FormControl
  }

  code: number = 200

  procesar() {
    this.http.post<any>('https://localhost:7158/api/v1/User/Validate', 
      this.form_auth.getRawValue()
    )
    .pipe(catchError((error: any, caught: Observable<any>): Observable<any> => {
      this.code = error.status
      return of();
    }))
    .subscribe(response => {
      this.code = response.code
      if (response.response) {
        this.authService.logIn()
        this.router.navigateByUrl('/invoice')
      }
    })
  }

}
