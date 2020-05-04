import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table/table-data-source';
import {ApiService} from './services/api.service';
import { BeerTableComponent } from './beer-table/beer-table.component';
import { MatFormField, MatFormFieldControl} from '@angular/material/form-field';
@NgModule({
  declarations: [
    AppComponent,
    BeerTableComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
