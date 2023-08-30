import { Module } from '@nestjs/common';
import PrismaModule from '@prisma/prisma.module';
import SupplierService from '@supplier/services/supplier.service';
import SupplierController from '@supplier/controller/supplier.controller';

@Module({
	imports: [PrismaModule],
	controllers: [SupplierController],
	providers: [SupplierService],
	exports: [SupplierService],
})
export default class SupplierModule {}
