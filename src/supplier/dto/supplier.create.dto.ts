import {
	IsEmail,
	IsNumber,
	IsString,
	Matches,
	MaxLength,
	MinLength,
} from 'class-validator';

export default class CreateSupplierDto {
	@IsString({ message: 'Name must be a string' })
	name: string;

	@IsEmail({}, { message: 'Email must be a valid email' })
	email: string;

	@IsString()
	@MinLength(4)
	@MaxLength(20)
	@Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
		message: 'password too weak',
	})
	password: string;

	@IsString({ message: 'Profile image must be a string' })
	profileImg: string;

	@IsString({ message: 'Phone must be a string' })
	phone: string;

	@IsString({ message: 'Street must be a string' })
	street: string;

	@IsNumber({}, { message: 'Number must be a number' })
	number: number;

	@IsString({ message: 'City must be a string' })
	city: string;

	@IsString({ message: 'State must be a string' })
	state: string;

	@IsString({ message: 'Zip code must be a string' })
	zipCode: string;
}
