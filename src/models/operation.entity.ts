import { BaseEntity, Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity('operations')
// @Index(['title'])
// export class Operation extends BaseEntity {
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
