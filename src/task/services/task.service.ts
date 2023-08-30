import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto, UpdateTaskDto } from '@task/dto';
import ITask from '@task/interfaces/task.interface';
import { PrismaService } from '@prisma/prisma.service';

@Injectable()
export default class TaskService {
	constructor(private readonly prisma: PrismaService) {}

	async findAll(): Promise<ITask[]> {
		const allTasks = await this.prisma.task.findMany();

		return allTasks;
	}

	async findOne(id: string): Promise<ITask> {
		const task = await this.prisma.task.findUnique({
			where: { id },
		});

		if (!task) {
			throw new NotFoundException('Task not found');
		}

		return task;
	}

	async create(createTaskDto: CreateTaskDto): Promise<ITask> {
		const supplierId = await this.prisma.supplier.findUnique({
			where: { id: createTaskDto.supplierId },
		});

		if (!supplierId) {
			throw new NotFoundException('SupplierId not found');
		}

		const taskData = {
			...createTaskDto,
			createdAt: new Date(),
			updatedAt: new Date(),
		};

		const createdTask = await this.prisma.task.create({ data: taskData });

		return createdTask;
	}

	async update(id: string, updateTaskDto: UpdateTaskDto): Promise<ITask> {
		const updatedTaskData = { ...updateTaskDto };

		const task = await this.prisma.task.findUnique({
			where: { id },
		});

		if (!task) {
			throw new NotFoundException('Task not found');
		}

		const updatedTask = await this.prisma.task.update({
			where: { id },
			data: updatedTaskData,
		});

		return updatedTask;
	}

	async remove(id: string) {
		await this.prisma.task.delete({ where: { id } });

		return `Task with ID ${id} has been successfully deleted`;
	}
}
