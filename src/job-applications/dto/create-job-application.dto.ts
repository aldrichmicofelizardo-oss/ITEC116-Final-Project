
import {
  IsInt,
  IsPositive,
} from 'class-validator';

export class CreateJobApplicationDto {
  @IsInt()
  @IsPositive()
  applicantId: number;

  @IsInt()
  @IsPositive()
  jobId: number;
}
