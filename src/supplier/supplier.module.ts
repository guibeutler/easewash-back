import { Module } from '@nestjs/common';
import SupplierService from '@supplier/services/supplier.service';
import SupplierController from '@supplier/controller/supplier.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
	imports: [PrismaModule],
	controllers: [SupplierController],
	providers: [SupplierService],
})
export class SupplierModule {}
