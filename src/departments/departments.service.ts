
import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Department } from './department.entity.js';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(Department)
    private readonly departmentsRepository: Repository<Department>,
  ) {}

  findAll() {
    return this.departmentsRepository.find();
  }

  async findOne(id: number) {
    const department = await this.departmentsRepository.findOneBy({ id });

    if (!department) {
      throw new NotFoundException('Department not found');
    }

    return department;
  }

  create(data: Partial<Department>) {
    const department = this.departmentsRepository.create(data);
    return this.departmentsRepository.save(department);
  }

  async update(id: number, data: Partial<Department>) {
    const department = await this.findOne(id);
    Object.assign(department, data);
    return this.departmentsRepository.save(department);
  }

  async remove(id: number) {
    const department = await this.findOne(id);
    await this.departmentsRepository.remove(department);

    return {
      message: 'Department deleted successfully',
    };
  }
}
