import { Operation } from '../models/operation.entity';
import { Repository, EntityRepository } from 'typeorm';
import { CreateTaskDto } from '../dto/pdf-generator.dto';

@EntityRepository(Operation)
export class OperationsRepository extends Repository<Operation> {
  async getOperations(): Promise<Operation[]> {
    const operations = this.createQueryBuilder('operation').getMany();
    return operations;
  }
}
