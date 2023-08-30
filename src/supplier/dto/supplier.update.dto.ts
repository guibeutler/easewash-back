import { ApiProperty } from '@nestjs/swagger';
import {
	IsNumber,
	IsOptional,
	IsString,
	Matches,
	MaxLength,
	MinLength,
} from 'class-validator';

export default class UpdateSupplierDto {
	@ApiProperty({
		description: 'Supplier name',
		example: 'Bella Clean',
	})
	@IsOptional()
	@IsString({ message: 'Name must be a string' })
	name?: string;

	@ApiProperty({
		description: 'Supplier password',
		example: 'Abc@123',
	})
	@IsOptional()
	@IsString()
	@MinLength(4)
	@MaxLength(20)
	@Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
		message: 'password too weak',
	})
	password?: string;

	@ApiProperty({
		description: 'Supplier profile image',
		example:
			'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	})
	@IsOptional()
	@IsString({ message: 'Profile image must be a string' })
	profileImg?: string;

	@ApiProperty({
		description: 'Supplier phone',
		example: '99 99999-9999',
	})
	@IsOptional()
	@IsString({ message: 'Phone must be a string' })
	phone?: string;

	@ApiProperty({
		description: 'Supplier street',
		example: 'Rua das Flores',
	})
	@IsOptional()
	@IsString({ message: 'Street must be a string' })
	street?: string;

	@ApiProperty({
		description: 'Supplier number',
		example: 99,
	})
	@IsOptional()
	@IsNumber({}, { message: 'Number must be a number' })
	number?: number;

	@ApiProperty({
		description: 'Supplier city',
		example: 'Belo Horizonte',
	})
	@IsOptional()
	@IsString({ message: 'City must be a string' })
	city?: string;

	@ApiProperty({
		description: 'Supplier state',
		example: 'MG',
	})
	@IsOptional()
	@IsString({ message: 'State must be a string' })
	state?: string;

	@ApiProperty({
		description: 'Supplier zip code',
		example: '12345678',
	})
	@IsOptional()
	@IsString({ message: 'Zip code must be a string' })
	zipCode?: string;
}
