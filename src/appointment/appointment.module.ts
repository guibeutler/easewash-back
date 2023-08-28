import { Module } from '@nestjs/common';
import AppointmentService from '@appointment/services/appointment.service';
import AppointmentController from '@appointment/controller/appointment.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
	imports: [PrismaModule],
	controllers: [AppointmentController],
	providers: [AppointmentService],
})
export class AppointmentModule {}
