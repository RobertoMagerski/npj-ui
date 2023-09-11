import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SplitterModule } from 'primeng/splitter';
import { TableModule } from 'primeng/table';


@NgModule({
  exports: [CommonModule, FormsModule, ButtonModule, TableModule, CardModule,SplitterModule, SplitButtonModule],
})
export class PrimeNGModule {}
