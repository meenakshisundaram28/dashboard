import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../../service/apiservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginform!: FormGroup


  constructor(private fb: FormBuilder, private apiservice: ApiserviceService, private router: Router) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.loginform = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      notification: ['', [Validators.required]],
    })
  }


  Submit() {
    if (this.loginform.invalid) {
      this.loginform.markAllAsTouched()
      return
    }
    this.apiservice.login(this.loginform.getRawValue()).subscribe(
      (response) => {
       console.log(response)
        this.apiservice.setToken('hdgjhfjkghkfhgjfhjghkjfh');
        if(this.loginform.get('email')?.value === 'admin@gmail.com'){
          this.apiservice.setUser('admin')
          this.router.navigate(['/admin']);
        }else if (this.loginform.get('email')?.value === 'user@gmail.com'){
          this.apiservice.setUser('user')
          this.router.navigate(['/user']);
        }
        else if (this.loginform.get('email')?.value === 'guest@gmail.com'){
          this.apiservice.setUser('guest')
          this.router.navigate(['/guest']);
        }
      }
    );
  }
}

