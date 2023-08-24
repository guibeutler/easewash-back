export default interface IAppointment {
	id: string;
	supplierId: string;
	clientId: string;
	startDate: Date;
	endDate: Date;
	status: string;
}
