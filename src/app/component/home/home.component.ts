import { Component, inject, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../../service/home.service';


@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
    users: any[] = [];

    http = inject(HttpClient);
    router = inject(Router);
    userService = inject(UserService)

    ngOnInit(): void {
        this.getalluser();
    }
    getalluser() {
        this.userService.getUser().subscribe({
            next: (res: any) => {
                this.users = res.data;
            },
            error: (err: any) => {
                console.log(err);
            }
        })
    }

    logout() {
        localStorage.clear();
        this.router.navigate(['/login'])
    }
}