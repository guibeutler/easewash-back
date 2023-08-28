import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { SupplierModule } from './supplier/supplier.module';
import { AppointmentModule } from './appointment/appointment.module';
import { TaskModule } from './task/task.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({
	imports: [
		ClientModule,
		SupplierModule,
		AppointmentModule,
		TaskModule,
		PrismaModule,
		AuthModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
