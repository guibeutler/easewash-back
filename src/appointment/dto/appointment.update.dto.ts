import { PartialType } from '@nestjs/mapped-types';
import { CreateAppointmentDto } from '@appointment/dto';

export default class UpdateAppointmentDto extends PartialType(
	CreateAppointmentDto,
) {}
