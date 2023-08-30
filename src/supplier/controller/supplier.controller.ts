import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from '@nestjs/common';
import { ApiHeader, ApiTags } from '@nestjs/swagger';
import SupplierService from '@supplier/services/supplier.service';
import { CreateSupplierDto, UpdateSupplierDto } from '@supplier/dto';
import { IsPublic } from '@auth/decorators/is-public.decorator';

@ApiTags('supplier')
@Controller('supplier')
export default class SupplierController {
	constructor(private readonly supplierService: SupplierService) {}

	@IsPublic()
	@ApiHeader({
		name: 'Authorization',
		description: 'Bearer token',
		required: true,
	})
	@Post()
	create(@Body() createSupplierDto: CreateSupplierDto) {
		return this.supplierService.create(createSupplierDto);
	}

	@ApiHeader({
		name: 'Authorization',
		description: 'Bearer token',
		required: true,
	})
	@Get()
	findAll() {
		return this.supplierService.findAll();
	}

	@ApiHeader({
		name: 'Authorization',
		description: 'Bearer token',
		required: true,
	})
	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.supplierService.findOne(id);
	}

	@ApiHeader({
		name: 'Authorization',
		description: 'Bearer token',
		required: true,
	})
	@Patch(':id')
	update(
		@Param('id') id: string,
		@Body() updateSupplierDto: UpdateSupplierDto,
	) {
		return this.supplierService.update(id, updateSupplierDto);
	}

	@ApiHeader({
		name: 'Authorization',
		description: 'Bearer token',
		required: true,
	})
	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.supplierService.remove(id);
	}
}
