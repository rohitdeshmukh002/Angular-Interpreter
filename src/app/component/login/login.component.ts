import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../service/home.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {
    router = inject(Router)
    http = inject(HttpClient)
    userService = inject(UserService)

    apiloginobj: any = {
        EmailId: "",
        Password: ""
    }

    login() {
        this.userService.loginPost(this.apiloginobj).subscribe({
            next: (res: any) => {
                console.log(res.message);
                localStorage.setItem('token', res.data.token);
                alert("login successfull..!")
                this.router.navigate(['/home']);
            },
            error: (err: any) => {
                console.log(err);
            }
        })
    }
}
