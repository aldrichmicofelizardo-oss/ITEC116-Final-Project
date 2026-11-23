
import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';

import { HrStaffService } from './hr-staff.service.js';
import { CreateHrStaffDto } from './dto/create-hr-staff.dto.js';
import { UpdateHrStaffDto } from './dto/update-hr-staff.dto.js';

import { JwtAuthGuard } from '../auth/jwt-auth/jwt-auth.guard.js';
import { RolesGuard } from '../auth/roles.guard.js';
import { Roles } from '../auth/roles.decorator.js';

@Controller('hr-staff')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('admin')
export class HrStaffController {
  constructor(
    private readonly hrStaffService: HrStaffService,
  ) {}

  @Get()
  findAll() {
    return this.hrStaffService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.hrStaffService.findOne(id);
  }

  @Post()
  create(@Body() data: CreateHrStaffDto) {
    return this.hrStaffService.create(data);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateHrStaffDto,
  ) {
    return this.hrStaffService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.hrStaffService.remove(id);
  }
}
