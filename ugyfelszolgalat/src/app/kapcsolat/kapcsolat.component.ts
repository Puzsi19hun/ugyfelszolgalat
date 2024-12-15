import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-kapcsolat',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './kapcsolat.component.html',
  styleUrl: './kapcsolat.component.css'
})
export class KapcsolatComponent {
  
  nev!: string;
  email!: string;
  uzenet!: string;


  
  constructor(private http: HttpClient) { }
  
  
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

  sendEmail(form: NgForm) {
    this.HTTPRequest('https://puzsisanyi.moriczcloud.hu/api/ugyfelszolgalat/email/' + this.nev + '/' + this.email + '/' + this.uzenet, this.handleResponse);
    form.resetForm()
  }
}
