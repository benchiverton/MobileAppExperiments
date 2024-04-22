import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransactionsPage } from './transactions.page';

describe('AboutPage', () => {
  let component: TransactionsPage;
  let fixture: ComponentFixture<TransactionsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionsPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
