import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-transroute',
  templateUrl: './transroute.component.html',
  styleUrls: ['./transroute.component.css']
})
export class TransrouteComponent implements OnInit {

  id: String = "";

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient

  ) { }

  product: any = [];

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.id = id;

    this.httpClient.get("../../assets/data/" + id + ".json").subscribe(data => {
      //console.log(data);
      this.product = data;
      console.log(this.product);
    })


  }

}
