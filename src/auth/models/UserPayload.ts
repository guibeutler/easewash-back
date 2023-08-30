export default interface UserPayload {
	sub: string;
	email: string;
	name: string;
	iat?: number;
	exp?: number;
}
