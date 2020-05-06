import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IBeer} from '../interfaces/IBeer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BEER_URL = 'https://api.punkapi.com/v2/beers'

  constructor(private httpClient: HttpClient) { }

    async getBeers(){
      //return this.httpClient.get<IBeer>(this.BEER_URL).toPromise();
      return await this.httpClient.get<IBeer[]>(this.BEER_URL).toPromise();

      // getBeer(): Observable<IBeer[]>{
    //   return this.httpClient.get<IBeer[]>(this.BEER_URL);
    }
    async getCount(path) {
      return await this.httpClient.get<IBeer[]>(this.BEER_URL + path).toPromise();
    }
  }


