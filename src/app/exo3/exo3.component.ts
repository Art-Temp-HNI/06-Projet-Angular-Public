import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';

import { AfterViewInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table'; 
import { MatTableDataSource } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-exo3',
  templateUrl: './exo3.component.html',
  styleUrls: ['./exo3.component.css']
})
export class Exo3Component implements OnInit {

  
  now: number = 0;

  constructor() {
    setInterval(() => {
      this.now = Date.now();
    }, 1);
  }

  routeTo() {

    console.log();

  }

  ngOnInit(): void {
  }

}