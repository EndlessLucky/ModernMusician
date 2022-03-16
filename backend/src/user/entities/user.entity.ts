import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique:true })
  address: string;

  @Column({ nullable: true })
  username?: string;

  @Column({nullable: true})
  code: string;

  @Column({default: 0})
  req_count_week: number;

  @Column({default: 0})
  req_count_day: number;

  @Column({nullable: true})
  last_req_at: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}
