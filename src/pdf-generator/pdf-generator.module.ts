import { Module } from '@nestjs/common';
import { PdfGeneratorController } from './pdf-generator.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { Operation } from '../models/operation.entity';
import { PdfGeneratorService } from './pdf-generator.service';
import { OperationsRepository } from '../repositories/operations.repository';
import { OperationsService } from '../operations/operations.service';
import { OperationsModule } from '../operations/operations.module';

@Module({
  imports: [
    OperationsModule,
    TypeOrmModule.forFeature([OperationsRepository])
  ],
  controllers: [
    PdfGeneratorController
  ],
  providers: [PdfGeneratorService, OperationsService]
})
export class PdfGeneratorModule {}
