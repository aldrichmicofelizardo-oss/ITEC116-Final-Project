
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity('departments')
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 100 })
  departmentName: string;

  @Column({ length: 150 })
  location: string;
}
