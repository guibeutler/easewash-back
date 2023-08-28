import { IsOptional, IsString } from 'class-validator';

export default class UpdateTaskDto {
	@IsOptional()
	@IsString({ message: 'Title must be a string' })
	title?: string;

	@IsOptional()
	@IsString({ message: 'Description must be a string' })
	description?: string;

	@IsOptional()
	@IsString({ message: 'Task image must be a string' })
	taskImg?: string;

	@IsOptional()
	@IsString({ message: 'Price must be a string' })
	price?: string;
}
