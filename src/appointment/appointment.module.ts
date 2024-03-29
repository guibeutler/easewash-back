import { Module } from '@nestjs/common';
import PrismaModule from '@prisma/prisma.module';
import AppointmentService from '@appointment/services/appointment.service';
import AppointmentController from '@appointment/controller/appointment.controller';

@Module({
	imports: [PrismaModule],
	controllers: [AppointmentController],
	providers: [AppointmentService],
})
export default class AppointmentModule {}
