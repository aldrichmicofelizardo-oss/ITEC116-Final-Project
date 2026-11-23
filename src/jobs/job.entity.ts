
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('jobs')
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ length: 100 })
  department: string;

  @Column({ default: 'Open' })
  status: string;

  @CreateDateColumn()
  createdAt: Date;
}

