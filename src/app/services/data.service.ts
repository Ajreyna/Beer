import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { async } from '@angular/core/testing';
import {ApiService} from './api.service';
import { getLocaleNumberSymbol } from '@angular/common';
import { IBeer } from '../interfaces./IBeer';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private apiService: ApiService) { }

    async getBeers(): Promise<IBeer> {
      return await this.apiService.get();
    }

  
}
