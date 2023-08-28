import { IsString } from 'class-validator';

export default class CreateTaskDto {
	@IsString({ message: 'SupplierId must be a string' })
	supplierId: string;

	@IsString({ message: 'Title must be a string' })
	title: string;

	@IsString({ message: 'Description must be a string' })
	description: string;

	@IsString({ message: 'Price must be a string' })
	price: string;

	@IsString({ message: 'Task image must be a string' })
	taskImg: string;
}
