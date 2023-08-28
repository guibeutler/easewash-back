import { IsString } from 'class-validator';

export default class CreateAppointmentDto {
	@IsString({ message: 'SupplierId must be a string' })
	supplierId: string;

	@IsString({ message: 'ClientId must be a string' })
	clientId: string;

	@IsString({ message: 'StartTime must be a date' })
	startTime: Date;

	@IsString({ message: 'EndTime must be a date' })
	endTime: Date;

	@IsString({ message: 'Status must be a string' })
	status: string;
}
