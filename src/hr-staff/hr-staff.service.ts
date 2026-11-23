
import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HrStaff } from './hr-staff.entity.js';

@Injectable()
export class HrStaffService {
  constructor(
    @InjectRepository(HrStaff)
    private readonly hrStaffRepository: Repository<HrStaff>,
  ) {}

  findAll() {
    return this.hrStaffRepository.find({
      relations: {
        department: true,
      },
    });
  }

  async findOne(id: number) {
    const staff = await this.hrStaffRepository.findOne({
      where: { id },
      relations: {
        department: true,
      },
    });

    if (!staff) {
      throw new NotFoundException('HR staff not found');
    }

    return staff;
  }

  create(data: Partial<HrStaff>) {
    const staff = this.hrStaffRepository.create(data);
    return this.hrStaffRepository.save(staff);
  }

  async update(id: number, data: Partial<HrStaff>) {
    const staff = await this.findOne(id);

    Object.assign(staff, data);

    return this.hrStaffRepository.save(staff);
  }

  async remove(id: number) {
    const staff = await this.findOne(id);

    await this.hrStaffRepository.remove(staff);

    return {
      message: 'HR staff deleted successfully',
    };
  }
}
