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
