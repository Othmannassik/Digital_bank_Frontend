import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AccountDetail} from "../../models/account.model";

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  backenHost : String = "http://localhost:8082";
  constructor(private http : HttpClient) { }

  public getAccount(accountId : String, page : number, size : number) : Observable<AccountDetail>{
    return this.http.get<AccountDetail>(this.backenHost+"/accounts/"+accountId+"/pageOperations?page="+page+"&size="+size);
  }
}
