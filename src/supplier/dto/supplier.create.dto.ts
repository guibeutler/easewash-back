import { ApiProperty } from '@nestjs/swagger';
import {
	IsEmail,
	IsNumber,
	IsString,
	Matches,
	MaxLength,
	MinLength,
} from 'class-validator';

export default class CreateSupplierDto {
	@ApiProperty({
		description: 'Supplier name',
		example: 'Bella Clean',
	})
	@IsString({ message: 'Name must be a string' })
	name: string;

	@ApiProperty({
		description: 'Supplier email',
		example: 'bella@clean',
	})
	@IsEmail({}, { message: 'Email must be a valid email' })
	email: string;

	@ApiProperty({
		description: 'Supplier password',
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
		description: 'Supplier profile image',
		example:
			'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	})
	@IsString({ message: 'Profile image must be a string' })
	profileImg: string;

	@ApiProperty({
		description: 'Supplier phone',
		example: '99 99999-9999',
	})
	@IsString({ message: 'Phone must be a string' })
	phone: string;

	@ApiProperty({
		description: 'Supplier street',
		example: 'Rua das Flores',
	})
	@IsString({ message: 'Street must be a string' })
	street: string;

	@ApiProperty({
		description: 'Supplier number',
		example: 123,
	})
	@IsNumber({}, { message: 'Number must be a number' })
	number: number;

	@ApiProperty({
		description: 'Supplier city',
		example: 'São Paulo',
	})
	@IsString({ message: 'City must be a string' })
	city: string;

	@ApiProperty({
		description: 'Supplier state',
		example: 'SP',
	})
	@IsString({ message: 'State must be a string' })
	state: string;

	@ApiProperty({
		description: 'Supplier zip code',
		example: '12345678',
	})
	@IsString({ message: 'Zip code must be a string' })
	zipCode: string;

	@ApiProperty({
		description: 'Role',
		example: 'supplier',
	})
	@IsString({ message: 'Role must be a string' })
	role: string;
}
