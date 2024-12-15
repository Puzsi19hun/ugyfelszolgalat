import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Service } from '../service.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-hibalista',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './hibalista.component.html',
  styleUrl: './hibalista.component.css'
})
export class HibalistaComponent implements OnInit{
  hiba: any;

  constructor(private dataService:Service, private http: HttpClient) { }

  ngOnInit(){
    this.getUgyfelszolgalatData();
  }

  HTTPRequest(url: string, callback: (responseText: string) => void): void {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        if (callback !== null) {
          callback(xhttp.responseText);
        }
      }
    };
    xhttp.open('get', url, true);
    xhttp.send();
  }

  handleResponse(responseText: string): void {
    console.log('Response received:', responseText);
}

  torol(id: number) {
    const url = 'https://puzsisanyi.moriczcloud.hu/api/ugyfelszolgalat/torol/' + id;
    this.HTTPRequest(url, (responseText) => {
        this.HTTPRequest('https://puzsisanyi.moriczcloud.hu/api/ugyfelszolgalatkiir', (responseText) => {
          this.getUgyfelszolgalatData();
        });
    });
}

  getUgyfelszolgalatData() {
    this.dataService.getData().subscribe(res =>{
      this.hiba = res;
    });
  }
}
