import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

if(typeof(global) !== 'undefined')
{
  (global as any).WebSocket = require('ws');
}

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private socket$: WebSocketSubject<string>;
  

  constructor() {
    this.socket$ = webSocket('ws://localhost:8080');
  }

  // Valós idejű adatok fogadása
  getData() {
    return this.socket$.asObservable();
  }

  // Kapcsolat lezárása
  closeConnection() {
    this.socket$.complete();
  }
}
