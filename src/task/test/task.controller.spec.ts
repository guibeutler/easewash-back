import { Test, TestingModule } from '@nestjs/testing';
import { TaskController } from '../controller/task.controller';
import { TaskService } from '../services/task.service';

describe('TaskController', () => {
	let controller: TaskController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [TaskController],
			providers: [TaskService],
		}).compile();

		controller = module.get<TaskController>(TaskController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
