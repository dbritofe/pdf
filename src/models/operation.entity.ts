import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('operations')
export class Operation {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', nullable: false })
  exchange: string;

  @Column({ type: 'varchar', nullable: false })
  market: string;

  @Column({ type: 'int', nullable: false })
  amount: number;
}
