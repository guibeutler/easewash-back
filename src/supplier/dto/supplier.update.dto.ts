import { PartialType } from '@nestjs/mapped-types';
import { CreateSupplierDto } from '@supplier/dto';

export default class UpdateSupplierDto extends PartialType(CreateSupplierDto) {}
