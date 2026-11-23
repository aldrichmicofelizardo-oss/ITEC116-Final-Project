
import {
  Controller,
  Get,
  Post,
  Patch,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard } from '../auth/jwt-auth/jwt-auth.guard.js';
import { RolesGuard } from '../auth/roles.guard.js';
import { Roles } from '../auth/roles.decorator.js';

import { ApplicantsService } from './applicants.service.js';
import { CreateApplicantDto } from './dto/create-applicant.dto.js';
import { UpdateApplicantDto } from './dto/update-applicant.dto.js';

@Controller('applicants')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('admin')
export class ApplicantsController {
  constructor(
    private readonly applicantsService: ApplicantsService,
  ) {}

  // Get all applicants
  @Get()
  findAll() {
    return this.applicantsService.findAll();
  }

  // Get applicant by ID
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.applicantsService.findOne(id);
  }

  // Create applicant
  @Post()
  create(@Body() data: CreateApplicantDto) {
    return this.applicantsService.create(data);
  }

  // Partially update applicant
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateApplicantDto,
  ) {
    return this.applicantsService.update(id, data);
  }

  // Fully update applicant
  @Put(':id')
  updateFull(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: CreateApplicantDto,
  ) {
    return this.applicantsService.update(id, data);
  }

  // Delete applicant
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.applicantsService.remove(id);
  }
}
