
import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { JobApplication } from './job-application.entity.js';
import { Applicant } from '../applicants/applicant.entity.js';
import { Job } from '../jobs/job.entity.js';

@Injectable()
export class JobApplicationsService {
  constructor(
    @InjectRepository(JobApplication)
    private readonly applicationsRepository: Repository<JobApplication>,

    @InjectRepository(Applicant)
    private readonly applicantsRepository: Repository<Applicant>,

    @InjectRepository(Job)
    private readonly jobsRepository: Repository<Job>,
  ) {}

  // Get all job applications with applicant and job details
  findAll() {
    return this.applicationsRepository.find({
      relations: {
        applicant: true,
        job: true,
      },
    });
  }

  // Get one job application with related details
  async findOne(id: number) {
    const application =
      await this.applicationsRepository.findOne({
        where: { id },
        relations: {
          applicant: true,
          job: true,
        },
      });

    if (!application) {
      throw new NotFoundException(
        `Job application with ID ${id} not found`,
      );
    }

    return application;
  }

  // Create a job application
  async create(applicantId: number, jobId: number) {
    const applicant =
      await this.applicantsRepository.findOneBy({
        id: applicantId,
      });

    if (!applicant) {
      throw new NotFoundException('Applicant not found');
    }

    const job = await this.jobsRepository.findOneBy({
      id: jobId,
    });

    if (!job) {
      throw new NotFoundException('Job not found');
    }

    if (job.status !== 'Open') {
      throw new BadRequestException(
        'This job is not open for applications',
      );
    }

    const application = this.applicationsRepository.create({
      applicantId,
      jobId,
      status: 'Pending',
    });

    return this.applicationsRepository.save(application);
  }

  // Update application status
  async updateStatus(id: number, status: string) {
    const application = await this.findOne(id);

    application.status = status;

    return this.applicationsRepository.save(application);
  }

  // Delete a job application
  async remove(id: number) {
    const application = await this.findOne(id);

    await this.applicationsRepository.remove(application);

    return {
      message: 'Job application deleted successfully',
    };
  }
}
