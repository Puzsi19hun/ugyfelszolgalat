import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Service } from '../service.service';
import { HttpClient, HttpClientXsrfModule, HttpEventType, HttpHandler, HttpRequest,HttpEvent ,HttpXsrfTokenExtractor, HTTP_INTERCEPTORS, ɵHttpInterceptorHandler } from '@angular/common/http';
import { Form, FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-hibabejelento',
  standalone: true,
  imports: [RouterModule,FormsModule,HttpClientXsrfModule],
  templateUrl: './hibabejelento.component.html',
  styleUrl: './hibabejelento.component.css'
})
export class HibabejelentoComponent{
  hiba: any;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Olvasd ki a CSRF tokent a cookie-ból vagy az alkalmazásban tárolt helyről
    const csrfToken = this.getCsrfToken();

    // Ha van CSRF token, add hozzá a kéréshez
    if (csrfToken) {
      req = req.clone({
        setHeaders: {
          'X-XSRF-TOKEN': csrfToken
        }
      });
    }

    return next.handle(req);
  }

  private getCsrfToken(): string | null {
    const name = 'XSRF-TOKEN=';
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return null;
  }

  constructor(private dataService:Service, private http: HttpClient) { }

  

  ngOnInit(){
    this.getUgyfelszolgalatData();
  }

  getUgyfelszolgalatData() {
    this.dataService.getData().subscribe(res =>{
      this.hiba = res;
    });
  }

  postList(data: any){
    console.warn(data.nev)
    this.dataService.insertData(data).subscribe((result)=>{
      console.warn(result);
    })
  }

  
}
