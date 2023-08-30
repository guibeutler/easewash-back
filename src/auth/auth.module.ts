import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { ClientModule } from '@client/client.module';
import { SupplierModule } from '@supplier/supplier.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
	imports: [
		ClientModule,
		SupplierModule,
		JwtModule.register({
			secret: process.env.JWT_SECRET,
			signOptions: {
				expiresIn: '1d',
			},
		}),
	],
	controllers: [AuthController],
	providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
