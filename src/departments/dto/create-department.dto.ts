
import {
  IsString,
  IsNotEmpty,
  MaxLength,
} from 'class-validator';

export class CreateDepartmentDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  departmentName: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  location: string;
}
