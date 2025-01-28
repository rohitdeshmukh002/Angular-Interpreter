import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const myToken = localStorage.getItem('token');
    const clonereq = req.clone({
        setHeaders: {
            Authorization: `Bearer ${myToken}`
        }
    })
    return next(clonereq);
};
