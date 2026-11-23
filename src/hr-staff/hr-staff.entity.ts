
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Department } from '../departments/department.entity.js';

@Entity('hr_staff')
export class HrStaff {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  firstName: string;

  @Column({ length: 100 })
  lastName: string;

  @Column({ unique: true, length: 150 })
  email: string;

  @Column({ length: 20, nullable: true })
  phone: string;

  @Column()
  departmentId: number;

  @ManyToOne(() => Department)
  @JoinColumn({ name: 'departmentId' })
  department: Department;
}
