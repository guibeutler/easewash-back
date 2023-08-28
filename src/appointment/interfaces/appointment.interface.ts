import { IClient } from '@client/interfaces';
import { ISupplier } from '@supplier/interfaces';

export default interface IAppointment {
	id: string;
	supplierId: string;
	clientId: string;
	startTime: Date;
	endTime: Date;
	status: string;
	createdAt: Date;
	updatedAt: Date;
	supplier?: ISupplier;
	client?: IClient;
}
