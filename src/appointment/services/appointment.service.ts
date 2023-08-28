import {
	BadRequestException,
	Injectable,
	NotFoundException,
} from '@nestjs/common';
import { CreateAppointmentDto, UpdateAppointmentDto } from '@appointment/dto';
import { IAppointment } from '@appointment/interfaces';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export default class AppointmentService {
	constructor(private readonly prisma: PrismaService) {}

	async findAll(): Promise<IAppointment[]> {
		const allAppointments = await this.prisma.appointment.findMany();

		return allAppointments;
	}

	async findOne(id: string): Promise<IAppointment> {
		const appointment = await this.prisma.appointment.findUnique({
			where: { id },
		});

		if (!appointment) {
			throw new NotFoundException(`Appointment with ID ${id} not found`);
		}

		return appointment;
	}

	async create(
		createAppointmentDto: CreateAppointmentDto,
	): Promise<IAppointment> {
		const { startTime, endTime } = createAppointmentDto;

		const clientIdExists = await this.prisma.client.findUnique({
			where: { id: createAppointmentDto.clientId },
		});

		const supplierId = await this.prisma.supplier.findUnique({
			where: { id: createAppointmentDto.supplierId },
		});

		if (!clientIdExists || !supplierId) {
			throw new NotFoundException('ClientId or SupplierId not found');
		}

		if (startTime >= endTime) {
			throw new BadRequestException('EndTime must be after StartTime');
		}

		const newAppointment = {
			...createAppointmentDto,
			createdAt: new Date(),
			updatedAt: new Date(),
		};

		const createdAppointment = await this.prisma.appointment.create({
			data: newAppointment,
		});

		return createdAppointment;
	}

	async update(
		id: string,
		updateAppointmentDto: UpdateAppointmentDto,
	): Promise<IAppointment> {
		const updatedAppointmentData = { ...updateAppointmentDto };

		const appointment = await this.prisma.appointment.findUnique({
			where: { id },
		});

		if (!appointment) {
			throw new NotFoundException(`Appointment with ID ${id} not found`);
		}

		const updatedAppointment = await this.prisma.appointment.update({
			where: { id },
			data: updatedAppointmentData,
		});

		return updatedAppointment;
	}

	async remove(id: string) {
		const appointment = await this.prisma.appointment.findUnique({
			where: { id },
		});

		if (!appointment) {
			throw new NotFoundException(`Appointment with ID ${id} not found`);
		}

		await this.prisma.appointment.delete({ where: { id } });

		return `Appointment with ID ${id} has been successfully deleted`;
	}
}
