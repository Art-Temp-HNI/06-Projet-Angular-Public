export class Transaction {

    id: String ="";
    amount: Number=0;
    balance: Number=0;
    label: String="";
    date: Date= new Date();


    constructor(id: String, amount: Number, balance: Number, label: String, date: Date) {
        this.id = id;
        this.amount = amount;
        this.balance = balance;
        this.label = label;
        this.date = date;
    }

}
