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

@Controller('appointment')
export default class AppointmentController {
	constructor(private readonly appointmentService: AppointmentService) {}

	@Post()
	create(@Body() createAppointmentDto: CreateAppointmentDto) {
		return this.appointmentService.create(createAppointmentDto);
	}

	@Get()
	findAll() {
		return this.appointmentService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.appointmentService.findOne(+id);
	}

	@Patch(':id')
	update(
		@Param('id') id: string,
		@Body() updateAppointmentDto: UpdateAppointmentDto,
	) {
		return this.appointmentService.update(+id, updateAppointmentDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.appointmentService.remove(+id);
	}
}
