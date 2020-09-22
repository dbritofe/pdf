import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Column } from 'typeorm';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsInt()
  id: number;

  @IsNotEmpty()
  @IsString()
  exchange: string;

  @IsNotEmpty()
  @IsString()
  market: string;

  @IsNotEmpty()
  @IsInt()
  amount: number;
}
