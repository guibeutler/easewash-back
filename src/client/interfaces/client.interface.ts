export default interface IClientAddress {
	street: string;
	number: string;
	city: string;
	state: string;
	zipCode: string;
}

export default interface IClient {
	id: number;
	name: string;
	email: string;
	password: string;
	phone: string;
	address: IClientAddress;
	cpf?: string;
	cnpj?: string;
	createdAt: Date;
	updatedAt: Date;
	appointments: string[];
}
