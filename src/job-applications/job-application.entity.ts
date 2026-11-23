
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Applicant } from '../applicants/applicant.entity.js';
import { Job } from '../jobs/job.entity.js';

@Entity('job_applications')
export class JobApplication {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  applicantId: number;

  @Column()
  jobId: number;

  @Column({ length: 50, default: 'Pending' })
  status: string;

  @CreateDateColumn()
  appliedAt: Date;

  @ManyToOne(() => Applicant, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'applicantId' })
  applicant: Applicant;

  @ManyToOne(() => Job, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'jobId' })
  job: Job;
}
