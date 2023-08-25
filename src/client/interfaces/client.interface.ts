// export default interface IClientAddress {
// 	street: string;
// 	number: string;
// 	city: string;
// 	state: string;
// 	zipCode: string;
// }

export default interface IClient {
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
	cpf?: string;
	cnpj?: string;
	createdAt: Date;
	updatedAt: Date;
	// appointments: string[];
}
