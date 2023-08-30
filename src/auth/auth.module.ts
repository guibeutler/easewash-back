import { JwtModule } from '@nestjs/jwt';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthController } from '@auth/auth.controller';
import { AuthService } from '@auth/auth.service';
import { LocalStrategy } from '@auth/strategies/local.strategy';
import { ClientModule } from '@client/client.module';
import { SupplierModule } from '@supplier/supplier.module';
import { JwtStrategy } from '@auth/strategies/jwt.strategy';
import { LoginValidationMiddleware } from '@auth/middlewares/login-validation.middleware';

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
	providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(LoginValidationMiddleware).forRoutes('login');
	}
}
