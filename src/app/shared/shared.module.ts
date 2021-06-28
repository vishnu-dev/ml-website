import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataLoaderComponent } from './data-loader/data-loader.component';
import { NbButtonModule, NbCardModule, NbDialogModule, NbSelectModule, NbToggleModule } from '@nebular/theme';
import { FileUploadModule } from 'ng2-file-upload';
import { NgxCsvParserModule } from 'ngx-csv-parser';
import { CsvConfigComponent } from './data-loader/csv-config.component';



@NgModule({
  declarations: [
    DataLoaderComponent,
    CsvConfigComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbToggleModule,
    NbButtonModule,
    NbSelectModule,
    FileUploadModule,
    NgxCsvParserModule,
    NbDialogModule.forChild()
  ],
  exports: [
    DataLoaderComponent
  ]
})
export class SharedModule { }
