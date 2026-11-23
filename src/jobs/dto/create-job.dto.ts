
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsIn,
  MaxLength,
} from 'class-validator';

export class CreateJobDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  department: string;

  @IsOptional()
  @IsString()
  @IsIn(['Open', 'Closed'])
  status?: string;
}
