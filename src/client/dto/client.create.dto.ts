import { ApiProperty } from '@nestjs/swagger';
import {
	IsEmail,
	IsNumber,
	IsString,
	Matches,
	MaxLength,
	MinLength,
} from 'class-validator';

export default class CreateClientDto {
	@ApiProperty({
		description: 'Name of the client',
		example: 'John Doe',
	})
	@IsString({ message: 'Name must be a string' })
	name: string;

	@ApiProperty({
		description: 'Email of the client',
		example: 'cK5J8@example.com',
	})
	@IsEmail({}, { message: 'Email must be a valid email' })
	email: string;

	@ApiProperty({
		description: 'Password of the client',
		example: 'Abc@123',
	})
	@IsString()
	@MinLength(4)
	@MaxLength(20)
	@Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
		message: 'password too weak',
	})
	password: string;

	@ApiProperty({
		description: 'Profile image of the client',
		example:
			'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
	})
	@IsString({ message: 'Profile image must be a string' })
	profileImg: string;

	@ApiProperty({
		description: 'Phone of the client',
		example: '99 99999-9999',
	})
	@IsString({ message: 'Phone must be a string' })
	phone: string;

	@ApiProperty({
		description: 'Street of the client',
		example: 'Av. Brigadeiro',
	})
	@IsString({ message: 'Street must be a string' })
	street: string;

	@ApiProperty({
		description: 'Number of the client',
		example: 123,
	})
	@IsNumber({}, { message: 'Number must be a number' })
	number: number;

	@ApiProperty({
		description: 'City of the client',
		example: 'São Paulo',
	})
	@IsString({ message: 'City must be a string' })
	city: string;

	@ApiProperty({
		description: 'State of the client',
		example: 'SP',
	})
	@IsString({ message: 'State must be a string' })
	state: string;

	@ApiProperty({
		description: 'Zip code of the client',
		example: '12345678',
	})
	@IsString({ message: 'Zip code must be a string' })
	zipCode: string;

	@ApiProperty({
		description: 'Role of the client',
		example: 'client',
	})
	@IsString({ message: 'Role must be a string' })
	role: string;
}
