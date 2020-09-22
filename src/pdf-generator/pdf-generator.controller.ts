import { Controller, Get } from '@nestjs/common';
import { PdfGeneratorService } from './pdf-generator.service';

@Controller('pdf-generator')
export class PdfGeneratorController {
  constructor(
    private pdfService: PdfGeneratorService
  ) {}

  @Get()
  generatePDF() {
    this.pdfService.generatePdf();
  }
}
