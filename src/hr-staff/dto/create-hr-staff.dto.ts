
import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsInt,
  IsOptional,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateHrStaffDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  lastName: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  phone?: string;

  @IsInt()
  @Min(1)
  departmentId: number;
}
