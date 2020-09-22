import { Injectable } from '@nestjs/common';
import { PDFOptionsFactory, PDFModuleOptions } from 'nestjs-pdf';

@Injectable()
export class PdfConfigService implements PDFOptionsFactory {
  createPdfOptions(): PDFModuleOptions {
    return {
      view: {
        root: './../pdfs',
        engine: 'pug'
      }
    }
  }
}
