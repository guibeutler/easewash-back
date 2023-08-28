import { IAppointment } from '@appointment/interfaces';
import ITask from '@task/interfaces/task.interface';

export default interface ISupplier {
	id: string;
	name: string;
	email: string;
	password: string;
	phone: string;
	street: string;
	number: number;
	city: string;
	state: string;
	zipCode: string;
	createdAt: Date;
	updatedAt: Date;
	services: ITask[];
	appointments: IAppointment[];
}
