import { Component, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-translist',
  templateUrl: './translist.component.html',
  styleUrls: ['./translist.component.css']
})
export class TranslistComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  products: any = [];

  ngOnInit(): void {
    this.httpClient.get("../../../assets/data/transactions.json").subscribe(data =>{
      console.log(data);
      this.products = data;
    })
  }

}
