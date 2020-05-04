import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { async } from '@angular/core/testing';
import {ApiService} from './api.service';
import { getLocaleNumberSymbol } from '@angular/common';
import { IBeer } from '../interfaces./IBeer';
import { DateAdapter } from '@angular/material/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private apiService: ApiService) { }

    // async getBeers(): Promise<IBeer> {
    //   return await this.apiService.get();
    async getBeers() {
      return await this.apiService.getBeers();
    }

    async save(count: number) {
      return await this.apiService.getCount('?per_page=' +count);

    }

    }  

  

