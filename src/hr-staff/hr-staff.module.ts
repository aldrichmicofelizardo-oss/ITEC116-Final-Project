
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { HrStaff } from './hr-staff.entity.js';
import { HrStaffController } from './hr-staff.controller.js';
import { HrStaffService } from './hr-staff.service.js';

import { AuthModule } from '../auth/auth.module.js';

@Module({
  imports: [
    TypeOrmModule.forFeature([HrStaff]),
    AuthModule,
  ],
  controllers: [HrStaffController],
  providers: [HrStaffService],
})
export class HrStaffModule {}
