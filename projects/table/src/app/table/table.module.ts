import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { TableRoutingModule } from './table-routing.module';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    TableRoutingModule,
  ]
})
export class TableModule { }
