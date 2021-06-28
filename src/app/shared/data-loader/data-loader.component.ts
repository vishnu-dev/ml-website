import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { FileUploader } from 'ng2-file-upload';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';
import { CsvConfigComponent } from './csv-config.component';

@Component({
  selector: 'app-data-loader',
  templateUrl: './data-loader.component.html',
  styleUrls: ['./data-loader.component.scss']
})
export class DataLoaderComponent implements OnInit {

  public uploader: FileUploader;
  public hasBaseDropZoneOver: boolean = false;
  type = 'drop';
  uploaderOptions = {};
  acceptedFileTypes = ['text/csv'];
  @Output() onAfterLoad = new EventEmitter<Array<any>|NgxCSVParserError>();

  constructor(
    private nbToastService: NbToastrService,
    private dialogService: NbDialogService,
    private ngxCsvParser: NgxCsvParser
  ) {
    this.uploader = new FileUploader(this.uploaderOptions);
    this.uploader.onAfterAddingFile = f => {
      if (this.uploader.queue.length > 1) {
        this.uploader.removeFromQueue(this.uploader.queue[0]);
      }
    };
  }

  ngOnInit(): void {
  }

  fileOverBase(e:any):void {
    console.log(e);
    this.hasBaseDropZoneOver = e;
  }

  checkFile(file: File) {
    if (!this.acceptedFileTypes.includes(file.type)) {
      this.nbToastService.danger('Unknown file type', 'File type error');
      throw new Error("Invalid File Type");
    }
  }
  
  readData(file: File) {
    if (file.type === 'text/csv') {
      this.dialogService
      .open(CsvConfigComponent, {dialogClass: 'csv-dialog'})
      .onClose.subscribe((config) => {
        this.ngxCsvParser.parse(file, config).pipe().subscribe((result) => {
          this.onAfterLoad.emit(result);
        }, (error: NgxCSVParserError) => {
          this.nbToastService.danger(error, 'Error');
        })
      });
    }
    console.log(file);
  }

  fileDropped(files: File[]) {
    if (files.length > 1) {
      this.nbToastService.danger('Only one file allowed', 'File limit error');
    } else {
      const file = files[0];
      this.checkFile(file);
      this.readData(file);
    }
  }
}
