import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export default class UpdateAppointmentDto {
	@ApiProperty({
		description: 'StartTime of the appointment',
		example: new Date(),
	})
	@IsOptional()
	@IsString({ message: 'StartTime must be a string' })
	startTime?: Date;

	@ApiProperty({
		description: 'EndTime of the appointment',
		example: new Date(),
	})
	@IsOptional()
	@IsString({ message: 'endTime must be a string' })
	endTime?: Date;

	@ApiProperty({
		description: 'Status of the appointment',
		example: 'pending',
	})
	@IsOptional()
	@IsString({ message: 'SupplierId must be a string' })
	status?: string;
}
