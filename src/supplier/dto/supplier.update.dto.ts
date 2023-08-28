import {
	IsNumber,
	IsOptional,
	IsString,
	Matches,
	MaxLength,
	MinLength,
} from 'class-validator';

export default class UpdateSupplierDto {
	@IsOptional()
	@IsString({ message: 'Name must be a string' })
	name?: string;

	@IsOptional()
	@IsString()
	@MinLength(4)
	@MaxLength(20)
	@Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
		message: 'password too weak',
	})
	password?: string;

	@IsOptional()
	@IsString({ message: 'Profile image must be a string' })
	profileImg?: string;

	@IsOptional()
	@IsString({ message: 'Phone must be a string' })
	phone?: string;

	@IsOptional()
	@IsString({ message: 'Street must be a string' })
	street?: string;

	@IsOptional()
	@IsNumber({}, { message: 'Number must be a number' })
	number?: number;

	@IsOptional()
	@IsString({ message: 'City must be a string' })
	city?: string;

	@IsOptional()
	@IsString({ message: 'State must be a string' })
	state?: string;

	@IsOptional()
	@IsString({ message: 'Zip code must be a string' })
	zipCode?: string;
}
