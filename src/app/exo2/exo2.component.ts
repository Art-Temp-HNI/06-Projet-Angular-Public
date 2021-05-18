import { Component, OnInit } from '@angular/core';
import { Operation } from '../operation';

@Component({
  selector: 'app-exo2',
  templateUrl: './exo2.component.html',
  styleUrls: ['./exo2.component.css']
})
export class Exo2Component implements OnInit {

  operator: string = "+";
  number1: number = 0;
  number2: number = 0;
  result: number = 0;
  operation : Operation = new Operation(); 
  historique : Operation[]=[];

  constructor() {
  }

  ngOnInit(): void {
  }

  deleteList(op: Operation){

    for (let i = 0; i<this.historique.length; i++){
      if (this.historique[i] === op){
        this.historique.splice(i,1);

        //delete this.historique[i];
      }
    }

  }

  calcul() {
    if (this.operator == "+") {
      this.result = Number(this.number1) + Number(this.number2);
    }

    if (this.operator == "-") {
      this.result = this.number1 - this.number2;
    }

    if (this.operator == "*") {
      this.result = this.number1 * this.number2;
    }

    if (this.operator == "/") {
      this.result = this.number1 / this.number2;
    }

    let ope = new Operation();

    ope.calcul = this.number1 + this.operator + this.number2;
    ope.resultat = this.result;

    this.historique.push(ope);

    console.log(this.historique);

  }

}
