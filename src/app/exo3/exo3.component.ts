import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';

import { AfterViewInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table'; 
import { MatTableDataSource } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { HttpClient } from "@angular/common/http";

import transacjson from '../../assets/data/transactions.json';

@Component({
  selector: 'app-exo3',
  templateUrl: './exo3.component.html',
  styleUrls: ['./exo3.component.css']
})
export class Exo3Component implements OnInit {

  products: any = [];
  now: number = 0;

  constructor(private httpClient: HttpClient) {
    setInterval(() => {
      this.now = Date.now();
    }, 1);
  }

  routeTo() {

    console.log();

  }

  ngOnInit(): void {
    this.httpClient.get("../../assets/data/transactions.json").subscribe(data =>{
      console.log(data);
      this.products = data;
    })
  }

}