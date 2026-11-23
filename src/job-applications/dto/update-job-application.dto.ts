
import {
  IsString,
  IsNotEmpty,
  IsIn,
} from 'class-validator';

export class UpdateJobApplicationDto {
  @IsString()
  @IsNotEmpty()
  @IsIn(['Pending', 'Approved', 'Rejected'])
  status: string;
}
