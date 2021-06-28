import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-csv-config',
  template: `
    <nb-card>
      <nb-card-header>Data Loader</nb-card-header>
      <nb-card-body>
        <div class="container">
          <div class="row mb-2">
            <div class="col-6">
              <small class="d-block mb-2">Does data have a header?</small>
              <nb-toggle status="primary" [(checked)]="header">{{ header ? 'Yes' : 'No' }}</nb-toggle>
            </div>
            <div class="col-6">
              <small class="d-block mb-2">Delimiter</small>
              <nb-select placeholder="Delimiter" [(selected)]="delimiter">
                <nb-option value=",">Comma</nb-option>
                <nb-option value="  ">Tab</nb-option>
              </nb-select>
            </div>
          </div>
        </div>
      </nb-card-body>
      <nb-card-footer class="d-flex justify-content-end">
        <button nbButton outline status="success" (click)="close()">Load</button>
      </nb-card-footer>
    </nb-card>
  `,
  styles: []
})
export class CsvConfigComponent {

  header = true;
  delimiter = ',';

  constructor(protected dialogRef: NbDialogRef<any>) {
  }

  close() {
    this.dialogRef.close({header: this.header, delimiter: this.delimiter});
  }

}
