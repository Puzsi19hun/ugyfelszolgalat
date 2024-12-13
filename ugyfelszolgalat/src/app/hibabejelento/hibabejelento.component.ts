import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Service } from '../service.service';
import { HttpClient, HttpClientXsrfModule } from '@angular/common/http';
import { Form, FormsModule } from '@angular/forms';
HttpClientXsrfModule

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

  getList(data: any){
    console.warn(data.nev)
    var headers = new Headers();
    headers.append('Authorization', 'Bearer AADDFFKKKLLLL');
    this.dataService.insertData(data).subscribe((result)=>{
      console.warn(result);
    })
  }

  
}
