import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { HttpClient } from '@angular/common/http';

if(typeof(global) !== 'undefined')
{
  (global as any).WebSocket = require('ws');

}

@Injectable({
  providedIn: 'root'
})
export class Service {
  constructor(private httpclient: HttpClient) {
  }

  // Valós idejű adatok fogadása
  getData() {
    return this.httpclient.get('https://puzsisanyi.moriczcloud.hu/api/ugyfelszolgalatkiir/');
  }

  // // Kapcsolat lezárása
  // closeConnection() {
  //   this.socket$.complete();
  // }
}
