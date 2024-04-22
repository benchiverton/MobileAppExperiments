import { Component, OnDestroy, OnInit } from '@angular/core';
import { Transaction, TransactionsService } from '../services/transactions.service';
import { Subscription, from, groupBy, mergeMap, of, toArray, zip } from 'rxjs';

@Component({
  selector: 'app-transactions',
  templateUrl: 'transactions.page.html',
  styleUrls: ['transactions.page.scss']
})
export class TransactionsPage implements OnInit, OnDestroy {

  transactionSubscription: Subscription = new Subscription();
  transactionsByDate: GroupedTransaction[] = [];
  ready: boolean = false;

  constructor(private transactionsService: TransactionsService) {
  }

  ngOnInit(): void {
    this.transactionsByDate.splice(-1);
    const transactions = this.transactionsService.getTransactions();
    this.transactionSubscription = from(transactions).pipe(
      groupBy(
        transaction => transaction.timestampUtc.toDateString(),
        t => t),
      mergeMap(group => zip(
        of(group.key), 
        group.pipe(toArray())
      ))
    ).subscribe((r) => {
      this.transactionsByDate.push({date: new Date(r[0]), transactions: r[1]});
      this.ready = true;
      console.log(this.transactionsByDate);
    });
  }

  ngOnDestroy(): void {
    this.transactionSubscription.unsubscribe();
  }
}

export interface GroupedTransaction {
  date: Date;
  transactions: Transaction[]
}
