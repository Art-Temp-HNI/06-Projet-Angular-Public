import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo1',
  templateUrl: './exo1.component.html',
  styleUrls: ['./exo1.component.css']
})
export class Exo1Component implements OnInit {

  nom: string = "Bob";
  taille: string = "24px";
  selected = 'Times';
  alignement = "left";
  constructor() { }

  ngOnInit(): void {

  }

}
