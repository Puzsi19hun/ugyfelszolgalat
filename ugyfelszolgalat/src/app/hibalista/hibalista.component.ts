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

  constructor(private dataService:Service) { }

  ngOnInit(){
    this.getUgyfelszolgalatData();
  }

  getUgyfelszolgalatData() {
    this.dataService.getData().subscribe(res =>{
      this.hiba = res;
    });
  }
}
