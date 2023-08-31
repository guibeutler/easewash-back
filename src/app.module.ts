import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import JwtAuthGuard from '../src/auth/guards/jwt-auth.guard';
import ClientModule from '../src/client/client.module';
import SupplierModule from '../src/supplier/supplier.module';
import AppointmentModule from '../src/appointment/appointment.module';
import TaskModule from '../src/task/task.module';
import PrismaModule from '../src/prisma/prisma.module';
import AuthModule from '../src/auth/auth.module';

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
