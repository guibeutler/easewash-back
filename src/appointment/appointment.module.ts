import { Module } from '@nestjs/common';
import AppointmentService from '@appointment/services/appointment.service';
import AppointmentController from '@appointment/controller/appointment.controller';

@Module({
	controllers: [AppointmentController],
	providers: [AppointmentService],
})
export class AppointmentModule {}
