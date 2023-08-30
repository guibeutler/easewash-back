import { Module } from '@nestjs/common';
import TaskService from '@task/services/task.service';
import TaskController from '@task/controller/task.controller';
import PrismaModule from '@prisma/prisma.module';

@Module({
	imports: [PrismaModule],
	controllers: [TaskController],
	providers: [TaskService],
})
export default class TaskModule {}
