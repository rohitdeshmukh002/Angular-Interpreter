import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }

    loginPost(credentials: any): Observable<any> {
        return this.http.post<any>('https://freeapi.miniprojectideas.com/api/User/Login', credentials);
    }

    getUser(): Observable<any> {
        return this.http.get<any>('https://freeapi.miniprojectideas.com/api/User/GetAllUsers');
    }

    createUser(userdata : any) : Observable<any>{
        return this.http.put<any>('https://freeapi.miniprojectideas.com/api/User/CreateNewUser',userdata)
    }

}
