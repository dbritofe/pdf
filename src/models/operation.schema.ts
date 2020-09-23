import { Column, EntitySchema } from 'typeorm';
import { Operation } from './operation.entity';

export const OperationSchema = new EntitySchema<Operation>({
  name: 'Operation',
  target: Operation,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true
    },
    exchange: {
      type: String
    },
    market: {
      type: String
    },
    amount: {
      type: Number
    }
  }
});
