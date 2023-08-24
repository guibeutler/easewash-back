import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { SupplierModule } from './supplier/supplier.module';
import { AppointmentModule } from './appointment/appointment.module';
import { TaskModule } from './task/task.module';

@Module({
	imports: [ClientModule, SupplierModule, AppointmentModule, TaskModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
