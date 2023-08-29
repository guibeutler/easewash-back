import { ClientService } from '@client/index';
import { Injectable } from '@nestjs/common';
import { SupplierService } from '@supplier/index';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
	constructor(
		private readonly clientService: ClientService,
		private readonly supplierService: SupplierService,
	) {}

	async validateUser(email: string, password: string) {
		const user = await Promise.any([
			this.clientService.findByEmail(email),
			this.supplierService.findByEmail(email),
		]);

		if (user) {
			const isValidPassword = await bcrypt.compare(password, user.password);

			if (isValidPassword) {
				return {
					...user,
					password: undefined,
				};
			}
		}

		throw new Error('Email or password is incorrect.');
	}
}
