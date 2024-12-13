import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Service } from '../service.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-hibabejelento',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './hibabejelento.component.html',
  styleUrl: './hibabejelento.component.css'
})
export class HibabejelentoComponent{
  hiba: any;

  constructor(private dataService:Service) { }

  
}
