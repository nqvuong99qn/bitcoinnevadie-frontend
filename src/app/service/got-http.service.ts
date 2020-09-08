import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from "@angular/common/http";


@Injectable()

export class GotHttpService {
  private baseUrl = 'https://api.coinmarketcap.com/v2/ticker'

  constructor(private _http: HttpClient) { }
  getDetails(): any{
    let myResponse = this._http.get(this.baseUrl)
  }

}