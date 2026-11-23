
import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Applicant } from './applicant.entity.js';

@Injectable()
export class ApplicantsService {
  constructor(
    @InjectRepository(Applicant)
    private readonly applicantsRepository: Repository<Applicant>,
  ) {}

  // Get all applicants
  findAll() {
    return this.applicantsRepository.find();
  }

  // Get applicant by ID
  async findOne(id: number) {
    const applicant = await this.applicantsRepository.findOneBy({
      id,
    });

    if (!applicant) {
      throw new NotFoundException(
        `Applicant with ID ${id} not found`,
      );
    }

    return applicant;
  }

  // Create applicant
  create(data: Partial<Applicant>) {
    const applicant = this.applicantsRepository.create(data);
    return this.applicantsRepository.save(applicant);
  }

  // Update applicant
  async update(id: number, data: Partial<Applicant>) {
    await this.findOne(id);

    await this.applicantsRepository.update(id, data);

    return this.findOne(id);
  }

  // Delete applicant
  async remove(id: number) {
    await this.findOne(id);

    await this.applicantsRepository.delete(id);

    return {
      message: `Applicant with ID ${id} deleted successfully`,
    };
  }
}
