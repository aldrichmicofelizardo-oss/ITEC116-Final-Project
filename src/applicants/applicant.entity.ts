
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('applicants')
export class Applicant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  firstName: string;

  @Column({ length: 100 })
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ length: 20, nullable: true })
  phone: string;

  @Column({ length: 100 })
  positionApplied: string;

  @Column({ default: 'Pending' })
  status: string;

  @CreateDateColumn()
  createdAt: Date;
}
