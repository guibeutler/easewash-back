import { Injectable } from '@nestjs/common';
import { CreateAppointmentDto, UpdateAppointmentDto } from '@appointment/dto';

@Injectable()
export default class AppointmentService {
	create(createAppointmentDto: CreateAppointmentDto) {
		return `This action adds a new appointment ${createAppointmentDto}`;
	}

	findAll() {
		return `This action returns all appointment`;
	}

	findOne(id: number) {
		return `This action returns a #${id} appointment`;
	}

	update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
		return `This action updates a #${id} appointment ${updateAppointmentDto}`;
	}

	remove(id: number) {
		return `This action removes a #${id} appointment`;
	}
}
