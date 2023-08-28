import { IAppointment } from '@appointment/interfaces';

export default interface IClient {
	id: string;
	name: string;
	email: string;
	password: string;
	profileImg: string;
	phone: string;
	street: string;
	number: number;
	city: string;
	state: string;
	zipCode: string;
	createdAt: Date;
	updatedAt: Date;
	appointments?: IAppointment[];
}
