import { Module } from '@nestjs/common';
import { ClientModule } from './client/client.module';
import { SupplierModule } from './supplier/supplier.module';
import { AppointmentModule } from './appointment/appointment.module';
import { TaskModule } from './task/task.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

@Module({
	imports: [
		ClientModule,
		SupplierModule,
		AppointmentModule,
		TaskModule,
		PrismaModule,
		AuthModule,
	],
	providers: [
		{
			provide: APP_GUARD,
			useClass: JwtAuthGuard,
		},
	],
})
export class AppModule {}
