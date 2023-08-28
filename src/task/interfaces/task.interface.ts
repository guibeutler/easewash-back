import { ISupplier } from '@supplier/interfaces';

export default interface ITask {
	id: string;
	title: string;
	description: string;
	price: string;
	createdAt: Date;
	updatedAt: Date;
	supplier?: ISupplier;
	supplierId: string;
}
