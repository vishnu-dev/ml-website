import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinearRegressionComponent } from './linear-regression/linear-regression.component';

const routes: Routes = [
  {path: 'linear-regression', component: LinearRegressionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MlRoutingModule { }
