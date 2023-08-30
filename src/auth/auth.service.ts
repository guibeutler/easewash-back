import { ClientService } from '@client/index';
import { IClient } from '@client/interfaces';
import { Injectable } from '@nestjs/common';
import { SupplierService } from '@supplier/index';
import * as bcrypt from 'bcrypt';
import { UserPayload } from './models/UserPayload';
import { ISupplier } from '@supplier/interfaces';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './models/UserToken';

@Injectable()
export class AuthService {
	constructor(
		private readonly clientService: ClientService,
		private readonly supplierService: SupplierService,
		private readonly jwtService: JwtService,
	) {}

	login(user: IClient | ISupplier): UserToken {
		const payload: UserPayload = {
			sub: user.id,
			email: user.email,
			name: user.name,
		};

		const jwtToken = this.jwtService.sign(payload);

		return {
			access_token: jwtToken,
		};
	}

	async validateUser(email: string, password: string) {
		const user = await Promise.any([
			this.clientService.findByEmail(email),
			this.supplierService.findByEmail(email),
		]);

		const role = user.role === 'client' ? 'client' : 'supplier';

		if (user) {
			const isValidPassword = await bcrypt.compare(password, user.password);

			if (isValidPassword) {
				return {
					...user,
					password: undefined,
					role,
				};
			}
		}

		throw new Error('Email or password is incorrect.');
	}
}
