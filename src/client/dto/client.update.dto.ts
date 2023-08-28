import {
	IsNumber,
	IsOptional,
	IsString,
	Matches,
	MaxLength,
	MinLength,
} from 'class-validator';

export default class UpdateClientDto {
	@IsOptional()
	@IsString({ message: 'Name must be a string' })
	readonly name?: string;

	@IsOptional()
	@IsString()
	@MinLength(4)
	@MaxLength(20)
	@Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
		message: 'password too weak',
	})
	readonly password?: string;

	@IsOptional()
	@IsString({ message: 'Profile image must be a string' })
	readonly profileImg?: string;

	@IsOptional()
	@IsString({ message: 'Phone must be a string' })
	readonly phone?: string;

	@IsOptional()
	@IsString({ message: 'Street must be a string' })
	readonly street?: string;

	@IsOptional()
	@IsNumber({}, { message: 'Number must be a number' })
	readonly number?: number;

	@IsOptional()
	@IsString({ message: 'City must be a string' })
	readonly city?: string;

	@IsOptional()
	@IsString({ message: 'State must be a string' })
	readonly state?: string;

	@IsOptional()
	@IsString({ message: 'Zip code must be a string' })
	readonly zipCode?: string;
}
