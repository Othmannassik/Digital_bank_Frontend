import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AccountsService} from "../../services/accounts/accounts.service";
import {Observable} from "rxjs";
import {AccountDetail} from "../../models/account.model";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit{
  accountFormGroup! : FormGroup;
  cuurentPage : number = 0;
  pageSize : number = 5;
  account$! : Observable<AccountDetail>;
  constructor(private fb : FormBuilder, private accountService : AccountsService) {
  }
  ngOnInit(): void {
    this.accountFormGroup = this.fb.group({
      accountId : this.fb.control("")
    });
  }

  handleSearchAccount() {
    let accountId : String = this.accountFormGroup.value.accountId;
    this.account$ = this.accountService.getAccount(accountId, this.cuurentPage, this.pageSize);
  }

  gotoPage(page: number) {
    this.cuurentPage = page ;
    this.handleSearchAccount();
  }
}
