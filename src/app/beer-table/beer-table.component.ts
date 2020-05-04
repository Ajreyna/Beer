import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort} from '@angular/material/sort';
import { MatPaginator} from '@angular/material/paginator';
import {IBeer} from '../interfaces./IBeer';
import {DataService} from '../services/data.service';
import {MatFormField} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-beer-table',
  templateUrl: './beer-table.component.html',
  styleUrls: ['./beer-table.component.css']
})
export class BeerTableComponent implements OnInit {
  dataSource: MatTableDataSource<IBeer>;

  count = 40;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  // @ViewChild(MatFormField, {static: true}) sort1: MatSort;

  displayedColumns: string[] =  [
    'id',
    'name',
    'tagline',
    'description',
    'image_url',
    'abv',
    
  ];

  constructor (private dataService: DataService) {}


  async ngOnInit() {
    const data = await this.dataService.getBeers();
    this.dataSource = new MatTableDataSource(data);

    this.dataSource.sort = this.sort;
    this.sort.direction = 'asc';
    this.sort.active = this.displayedColumns[0];
  }
  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

  async getTableBeer() {
    return await this.dataService.getBeers();
  }

  async addBeer(){
    this.dataSource = new MatTableDataSource(await this.dataService.save(this.count++));
    this.dataSource.sort = this.sort;
    this.sort.direction = 'asc';
    this.sort.active = this.displayedColumns[0];
  }

}
