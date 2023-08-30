import { ApiProperty } from '@nestjs/swagger';
import {
	IsNumber,
	IsOptional,
	IsString,
	Matches,
	MaxLength,
	MinLength,
} from 'class-validator';

export default class UpdateClientDto {
	@ApiProperty({
		description: 'Name of the client',
		example: 'John Doe',
		required: false,
	})
	@IsOptional()
	@IsString({ message: 'Name must be a string' })
	readonly name?: string;

	@ApiProperty({
		description: 'Password of the client',
		example: 'Abc@123',
		required: false,
	})
	@IsOptional()
	@IsString()
	@MinLength(4)
	@MaxLength(20)
	@Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
		message: 'password too weak',
	})
	readonly password?: string;

	@ApiProperty({
		description: 'Profile image of the client',
		example:
			'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
		required: false,
	})
	@IsOptional()
	@IsString({ message: 'Profile image must be a string' })
	readonly profileImg?: string;

	@ApiProperty({
		description: 'Phone of the client',
		example: '99 99999-9999',
		required: false,
	})
	@IsOptional()
	@IsString({ message: 'Phone must be a string' })
	readonly phone?: string;

	@ApiProperty({
		description: 'Street of the client',
		example: 'Av. Brigadeiro',
		required: false,
	})
	@IsOptional()
	@IsString({ message: 'Street must be a string' })
	readonly street?: string;

	@ApiProperty({
		description: 'Number of the client',
		example: 99,
		required: false,
	})
	@IsOptional()
	@IsNumber({}, { message: 'Number must be a number' })
	readonly number?: number;

	@ApiProperty({
		description: 'City of the client',
		example: 'São Paulo',
		required: false,
	})
	@IsOptional()
	@IsString({ message: 'City must be a string' })
	readonly city?: string;

	@ApiProperty({
		description: 'State of the client',
		example: 'SP',
		required: false,
	})
	@IsOptional()
	@IsString({ message: 'State must be a string' })
	readonly state?: string;

	@ApiProperty({
		description: 'Zip code of the client',
		example: '12345678',
		required: false,
	})
	@IsOptional()
	@IsString({ message: 'Zip code must be a string' })
	readonly zipCode?: string;
}
