import { IsOptional, IsString } from 'class-validator';

export default class UpdateAppointmentDto {
	@IsOptional()
	@IsString({ message: 'StartTime must be a string' })
	startTime?: Date;

	@IsOptional()
	@IsString({ message: 'endTime must be a string' })
	endTime?: Date;

	@IsOptional()
	@IsString({ message: 'SupplierId must be a string' })
	status?: string;
}
