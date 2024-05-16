import { Component } from '@angular/core';
import { AccountHolder } from './account-holder.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account-holders',
  standalone:true,
  imports:[FormsModule],
  templateUrl: './account-holders.component.html',
  styleUrls: ['./account-holders.component.css']
})
export class AccountHolderComponent {
  accountHolders: AccountHolder[] = [
    { accountNumber: '12345', acHolderName: 'Kavi', typeOfAccount: 'SavingsAcc', amount: 1500, bankName: 'ABC Bank' },
    { accountNumber: '67890', acHolderName: 'balaji', typeOfAccount: 'BusinessAcc', amount: 25000, bankName: 'XYZ Bank' },
    // Add more account holders as needed
  ];
}
