import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MlRoutingModule } from './ml-routing.module';
import { LinearRegressionComponent } from './linear-regression/linear-regression.component';
import { SharedModule } from '../shared/shared.module';
import { NbCardModule } from '@nebular/theme';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    LinearRegressionComponent
  ],
  imports: [
    CommonModule,
    MlRoutingModule,
    SharedModule,
    NbCardModule,
    AgGridModule.withComponents([])
  ]
})
export class MlModule { }
