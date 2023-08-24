import { Module } from '@nestjs/common';
import TaskService from '@task/services/task.service';
import TaskController from '@task/controller/task.controller';

@Module({
	controllers: [TaskController],
	providers: [TaskService],
})
export class TaskModule {}
