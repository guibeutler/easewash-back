import { Injectable } from '@nestjs/common';
import { CreateTaskDto, UpdateTaskDto } from '@task/dto';

@Injectable()
export default class TaskService {
	create(createTaskDto: CreateTaskDto) {
		return `This action adds a new task ${createTaskDto}`;
	}

	findAll() {
		return `This action returns all task`;
	}

	findOne(id: number) {
		return `This action returns a #${id} task`;
	}

	update(id: number, updateTaskDto: UpdateTaskDto) {
		return `This action updates a #${id} task ${updateTaskDto}`;
	}

	remove(id: number) {
		return `This action removes a #${id} task`;
	}
}
