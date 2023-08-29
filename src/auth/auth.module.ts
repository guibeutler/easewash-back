import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { ClientModule } from '@client/client.module';
import { SupplierModule } from '@supplier/supplier.module';

@Module({
	imports: [ClientModule, SupplierModule],
	controllers: [AuthController],
	providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
