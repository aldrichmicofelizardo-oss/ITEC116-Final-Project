
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './job.entity.js';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job)
    private readonly jobsRepository: Repository<Job>,
  ) {}

  findAll() {
    return this.jobsRepository.find();
  }

  async findOne(id: number) {
    const job = await this.jobsRepository.findOneBy({ id });

    if (!job) {
      throw new NotFoundException('Job not found');
    }

    return job;
  }

  create(data: Partial<Job>) {
    const job = this.jobsRepository.create(data);
    return this.jobsRepository.save(job);
  }

  async update(id: number, data: Partial<Job>) {
    const job = await this.findOne(id);
    Object.assign(job, data);
    return this.jobsRepository.save(job);
  }

  async remove(id: number) {
    const job = await this.findOne(id);
    await this.jobsRepository.remove(job);
    return { message: 'Job deleted successfully' };
  }
}
