import { Body, Controller, Get, Post } from '@nestjs/common';
import { OperationsService } from './operations.service';
import { CreateOperationDto } from '../dto/create-operation.dto';
import { Operation } from '../models/operation.entity';

@Controller('operations')
export class OperationsController {
  constructor(
    private readonly operationsService: OperationsService
  ) {}

  @Post()
  async create(@Body() createOperationDto: CreateOperationDto) {
    this.operationsService.create(createOperationDto);
  }

  @Get()
  async findAll(): Promise<Operation[]> {
    return this.operationsService.findAll();
  }
}
