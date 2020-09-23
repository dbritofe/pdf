import { Injectable } from '@nestjs/common';
import { Operation } from '../models/operation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { OperationsRepository } from '../repositories/operations.repository';

@Injectable()
export class OperationsService {
  constructor(
    @InjectRepository(OperationsRepository)
    private operationRepository: OperationsRepository
  ) {}

  private readonly operations: Operation[] = [];

  create(operation: Operation) {
    this.operations.push(operation);
    this.operationRepository.save(operation);
  }

  findAll(): Promise<Operation[]> {
    return this.operationRepository.getOperations();
  }
}
