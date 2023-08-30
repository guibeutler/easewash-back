import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export default class UpdateTaskDto {
	@ApiProperty({
		description: 'Title',
		example: 'Wash',
	})
	@IsOptional()
	@IsString({ message: 'Title must be a string' })
	title?: string;

	@ApiProperty({
		description: 'Description',
		example: 'Wash the car',
	})
	@IsOptional()
	@IsString({ message: 'Description must be a string' })
	description?: string;

	@ApiProperty({
		description: 'Task image',
		example:
			'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
	})
	@IsOptional()
	@IsString({ message: 'Task image must be a string' })
	taskImg?: string;

	@ApiProperty({
		description: 'Price',
		example: '50',
	})
	@IsOptional()
	@IsString({ message: 'Price must be a string' })
	price?: string;
}
