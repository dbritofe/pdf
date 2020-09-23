import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOperationDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  exchange: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  market: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  amount: number;
}
