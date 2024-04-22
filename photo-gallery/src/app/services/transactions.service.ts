import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  public transactions: Transaction[] = [{
    timestampUtc: new Date("2023-11-12T00:00:00"),
    vendor: "Apple",
    amount: 16.99,
    currency: "GBP"
  }, {
    timestampUtc: new Date("2023-11-14T00:00:00"),
    vendor: "Netflix",
    amount: 15.99,
    currency: "GBP"
  }, {
    timestampUtc: new Date("2023-11-16T00:00:00"),
    vendor: "Restaurant",
    amount: 74.00,
    currency: "GBP"
  }, {
    timestampUtc: new Date("2023-11-16T00:00:00"),
    vendor: "Petrol",
    amount: 30.00,
    currency: "GBP"
  }, {
    timestampUtc: new Date("2023-11-20T00:00:00"),
    vendor: "Gas & Electric",
    amount: 120.39,
    currency: "GBP"
  }, {
    timestampUtc: new Date("1968-11-20T00:00:00"),
    vendor: "Rent",
    amount: 1400.00,
    currency: "GBP"
  }];

  public getTransactions(): Transaction[] {
    return this.transactions;
  }
}

export interface Transaction {
  timestampUtc: Date;
  vendor: string;
  amount: number;
  currency: string;
}
