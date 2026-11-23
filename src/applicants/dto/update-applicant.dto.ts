
import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsString, IsIn } from 'class-validator';
import { CreateApplicantDto } from './create-applicant.dto.js';

export class UpdateApplicantDto extends PartialType(CreateApplicantDto) {
  @IsOptional()
  @IsString()
  @IsIn(['Pending', 'Approved', 'Rejected'])
  status?: string;
}
