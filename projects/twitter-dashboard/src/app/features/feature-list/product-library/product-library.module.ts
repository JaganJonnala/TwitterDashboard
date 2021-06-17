import {  MatPaginatorModule } from '@angular/material/paginator';
import { ProductLibraryComponent } from './product-library.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [ProductLibraryComponent],
  imports: [
    CommonModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatExpansionModule,
    SharedModule
  ]
})
export class ProductLibraryModule {}
