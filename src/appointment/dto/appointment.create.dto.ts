import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export default class CreateAppointmentDto {
	@ApiProperty({
		description: 'SupplierId of the appointment',
		example: '1939aaf3-abb3-4eb5-86c7-ccc998ff91b1',
	})
	@IsString({ message: 'SupplierId must be a string' })
	supplierId: string;

	@ApiProperty({
		description: 'ClientId of the appointment',
		example: '1939aaf3-abb3-4eb5-86c7-ccc998ff91b1',
	})
	@IsString({ message: 'ClientId must be a string' })
	clientId: string;

	@ApiProperty({
		description: 'StartTime of the appointment',
		example: new Date(),
	})
	@IsString({ message: 'StartTime must be a date' })
	startTime: Date;

	@ApiProperty({
		description: 'EndTime of the appointment',
		example: new Date(),
	})
	@IsString({ message: 'EndTime must be a date' })
	endTime: Date;

	@ApiProperty({
		description: 'Status of the appointment',
		example: 'pending',
	})
	@IsString({ message: 'Status must be a string' })
	status: string;
}
