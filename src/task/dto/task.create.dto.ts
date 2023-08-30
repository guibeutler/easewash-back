import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export default class CreateTaskDto {
	@ApiProperty({
		description: 'Supplier Id',
		example: '3d49f32a-a398-4bec-8a54-a1c821c39c21',
		required: true,
	})
	@IsString({ message: 'SupplierId must be a string' })
	supplierId: string;

	@ApiProperty({
		description: 'Title',
		example: 'Wash',
	})
	@IsString({ message: 'Title must be a string' })
	title: string;

	@ApiProperty({
		description: 'Description',
		example: 'Wash the car',
	})
	@IsString({ message: 'Description must be a string' })
	description: string;

	@ApiProperty({
		description: 'Price',
		example: '50',
	})
	@IsString({ message: 'Price must be a string' })
	price: string;

	@ApiProperty({
		description: 'Task image',
		example:
			'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
	})
	@IsString({ message: 'Task image must be a string' })
	taskImg: string;
}
