
import { PartialType } from '@nestjs/mapped-types';
import { CreateHrStaffDto } from './create-hr-staff.dto.js';

export class UpdateHrStaffDto extends PartialType(
  CreateHrStaffDto,
) {}
