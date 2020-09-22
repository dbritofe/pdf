import { Module } from '@nestjs/common';
import { PdfGeneratorController } from './pdf-generator.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { Operation } from '../models/operation.entity';
import { PdfGeneratorService } from './pdf-generator.service';
import { OperationsRepository } from '../repositories/operations.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([OperationsRepository])
  ],
  controllers: [
    PdfGeneratorController
  ],
  providers: [PdfGeneratorService]
})
export class PdfGeneratorModule {}
