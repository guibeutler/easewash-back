import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from '@nestjs/common';
import SupplierService from '@supplier/services/supplier.service';
import { CreateSupplierDto, UpdateSupplierDto } from '@supplier/dto';

@Controller('supplier')
export default class SupplierController {
	constructor(private readonly supplierService: SupplierService) {}

	@Post()
	create(@Body() createSupplierDto: CreateSupplierDto) {
		return this.supplierService.create(createSupplierDto);
	}

	@Get()
	findAll() {
		return this.supplierService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.supplierService.findOne(+id);
	}

	@Patch(':id')
	update(
		@Param('id') id: string,
		@Body() updateSupplierDto: UpdateSupplierDto,
	) {
		return this.supplierService.update(+id, updateSupplierDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.supplierService.remove(+id);
	}
}
