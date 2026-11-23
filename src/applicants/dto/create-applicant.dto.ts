
import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsOptional,
  MaxLength,
} from 'class-validator';

export class CreateApplicantDto {
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

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  positionApplied: string;
}
