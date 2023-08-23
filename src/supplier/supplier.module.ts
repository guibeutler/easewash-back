import { Module } from '@nestjs/common';
import SupplierService from '@supplier/services/supplier.service';
import SupplierController from '@supplier/controller/supplier.controller';

@Module({
	controllers: [SupplierController],
	providers: [SupplierService],
})
export class SupplierModule {}
