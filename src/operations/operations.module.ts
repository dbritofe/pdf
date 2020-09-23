import { Module } from '@nestjs/common';
import { OperationsController } from './operations.controller';
import { OperationsService } from './operations.service';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { OperationSchema } from '../models/operation.schema';
import { OperationsRepository } from '../repositories/operations.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([OperationsRepository])
  ],
  controllers: [OperationsController],
  providers: [OperationsService],
  exports: [OperationsService]
})
export class OperationsModule {}
