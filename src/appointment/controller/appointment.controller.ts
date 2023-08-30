import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from '@nestjs/common';
import AppointmentService from '@appointment/services/appointment.service';
import { CreateAppointmentDto, UpdateAppointmentDto } from '@appointment/dto';
import { ApiHeader, ApiTags } from '@nestjs/swagger';

@ApiTags('appointment')
@Controller('appointment')
export default class AppointmentController {
	constructor(private readonly appointmentService: AppointmentService) {}

	@ApiHeader({
		name: 'Authorization',
		description: 'Bearer token',
		required: true,
	})
	@Post()
	create(@Body() createAppointmentDto: CreateAppointmentDto) {
		return this.appointmentService.create(createAppointmentDto);
	}

	@ApiHeader({
		name: 'Authorization',
		description: 'Bearer token',
		required: true,
	})
	@Get()
	findAll() {
		return this.appointmentService.findAll();
	}

	@ApiHeader({
		name: 'Authorization',
		description: 'Bearer token',
		required: true,
	})
	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.appointmentService.findOne(id);
	}

	@ApiHeader({
		name: 'Authorization',
		description: 'Bearer token',
		required: true,
	})
	@Patch(':id')
	update(
		@Param('id') id: string,
		@Body() updateAppointmentDto: UpdateAppointmentDto,
	) {
		return this.appointmentService.update(id, updateAppointmentDto);
	}

	@ApiHeader({
		name: 'Authorization',
		description: 'Bearer token',
		required: true,
	})
	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.appointmentService.remove(id);
	}
}
