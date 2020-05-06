class SavingsAccount extends Account{

    constructor(profit, number) {
        super(number);
        this._profit = profit;

    }


    getProfit(){
        return this._profit;
    }

    setProfit(profit){
        this._profit = profit;
    }

    addProfit(profit){
        let amount = this._balance + (profit/100);
        this._balance+= amount;
        return amount;
    }

    toString() {
        return "SavingsAccount: " + this._number + " balance " + this._balance;
    }

    endOfMonth(){
        let profit = prompt("How much profit was made this month?");
        let amount = this.addProfit(profit);
        return "The total amount added to the savingsAccount was: "+amount + " total balance is now: " + this._balance;
    }

}

class CheckingAccount extends Account{

    constructor(overdraft , number) {
        super(number);
        this._overdraft = overdraft;
    }

    getOverdraft(){
        return this._overdraft;
    }

    setOverdraft(overdraft){
        this._overdraft = overdraft;
    }

    withdraw(amount){
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this._balance + this._overdraft) {
            throw Error("Insufficient funds");
        }
        this._balance -= amount;

    }

    toString() {
        return "CheckingAccount: " + this._number + " balance " + this._balance;
    }

    endOfMonth(){
        if (this._balance < 0){
            return "WARNING, low balance CheckingAccount"+this._number +" balance:"+ this._balance + " overdraft limit: " +this._overdraft;
        }else{
            return "Balance still positive";
        }
    }

}

class Bank{

    static nextNumber = 0;

    constructor() {
        this._accounts = [];
    }

    addAccount(){
        let account = new Account(Bank.nextNumber);
        this._accounts.push(account);
        Bank.nextNumber++;
        return Bank.nextNumber;
    }

    addSavingsAccount(profit){
        let sAcct = new SavingsAccount(profit,Bank.nextNumber);
        this._accounts.push(sAcct);
        Bank.nextNumber++;
        return Bank.nextNumber;

    }

    addCheckingAccount(overdraft){
        let cAcct = new CheckingAccount(overdraft,Bank.nextNumber);
        this._accounts.push(cAcct);
        Bank.nextNumber++;
        return Bank.nextNumber;

    }

    closeAccount(number){
        this._accounts = this._accounts.filter(a => a.getNumber()!==number);
    }

    accountReport(){

        for (let a of this._accounts){
            console.log(a.toString());
            document.writeln(a.toString());

        }

    }

    endOfMonth(){
        for (let a of this._accounts){
            console.log(a.endOfMonth());
        }
    }



}

let Bank1 = new Bank();
Bank1.addAccount();
Bank1.addCheckingAccount(500);
Bank1.addSavingsAccount(100);

Bank1.accountReport();

Bank1.endOfMonth();

Bank1.closeAccount(1);
Bank1.accountReport();
