import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Service } from '../service.service';
import { HttpClient, HttpClientXsrfModule, HttpEventType, HttpHandler, HttpRequest, HttpEvent, HttpXsrfTokenExtractor, HTTP_INTERCEPTORS, ɵHttpInterceptorHandler } from '@angular/common/http';
import { Form, FormsModule, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-hibabejelento',
  standalone: true,
  imports: [RouterModule, FormsModule, HttpClientXsrfModule],
  templateUrl: './hibabejelento.component.html',
  styleUrl: './hibabejelento.component.css'
})
export class HibabejelentoComponent implements OnInit {
  data: any[] = [];

  hiba: { nev: string; varos: string; hiba: string; } = { nev: '', varos: '', hiba: '' };

  constructor(private dataService: Service, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('https://puzsisanyi.moriczcloud.hu/api/ugyfelszolgalatkiir')
      .subscribe(json => this.data = json.data)
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

  addPost(form: NgForm) {
    this.HTTPRequest('https://puzsisanyi.moriczcloud.hu/api/ugyfelszolgalatfeltolt/' + this.hiba.nev + '/' + this.hiba.varos + '/' + this.hiba.hiba, this.handleResponse);
    form.resetForm();
  }


}
