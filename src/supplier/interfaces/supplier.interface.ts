export default interface ISupplierAddress {
	street: string;
	number: string;
	city: string;
	state: string;
	zipCode: string;
}

export default interface ISupplier {
	id: string;
	name: string;
	email: string;
	password: string;
	phone: string;
	address: ISupplierAddress;
	cpf?: string;
	cnpj?: string;
	createdAt: Date;
	updatedAt: Date;
	services: string[];
	appointments: string[];
}
