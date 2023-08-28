import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSupplierDto, UpdateSupplierDto } from '@supplier/dto';
import { ISupplier } from '@supplier/interfaces';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export default class SupplierService {
	constructor(private readonly prisma: PrismaService) {}

	async findAll() {
		const allSuppliers = await this.prisma.supplier.findMany();
		const suppliersWithoutPasswords = allSuppliers.map(
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			({ password, ...supplier }) => supplier,
		);
		return suppliersWithoutPasswords;
	}

	async findOne(id: string) {
		const supplier = await this.prisma.supplier.findUnique({
			where: { id },
		});

		if (!supplier) {
			throw new NotFoundException(`Supplier with ID ${id} not found`);
		}

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { password, ...supplierWithoutPassword } = supplier;

		return supplierWithoutPassword;
	}

	async findByEmail(email: string) {
		const supplier = await this.prisma.supplier.findUnique({
			where: { email },
		});

		if (!supplier) {
			throw new NotFoundException(`Supplier with email ${email} not found`);
		}

		return supplier;
	}

	async create(createSupplierDto: CreateSupplierDto): Promise<ISupplier> {
		const hashedPassword = await bcrypt.hash(createSupplierDto.password, 10);

		const checkEmail = await this.prisma.supplier.findUnique({
			where: { email: createSupplierDto.email },
		});

		if (checkEmail) {
			throw new NotFoundException(
				`Supplier with email ${createSupplierDto.email} already exists`,
			);
		}

		const supplierData = {
			...createSupplierDto,
			password: hashedPassword,
			createdAt: new Date(),
			updatedAt: new Date(),
		};

		const createdSupplier = await this.prisma.supplier.create({
			data: supplierData,
		});

		return {
			...createdSupplier,
			password: undefined,
		};
	}

	async update(id: string, updateSupplierDto: UpdateSupplierDto) {
		const updatedSupplierData = { ...updateSupplierDto };

		if (updateSupplierDto.password) {
			const hashedPassword = await bcrypt.hash(updateSupplierDto.password, 10);
			updatedSupplierData.password = hashedPassword;
		}

		const supplier = await this.prisma.supplier.findUnique({
			where: { id },
		});

		if (!supplier) {
			throw new NotFoundException(`Supplier with ID ${id} not found`);
		}

		const updatedSupplier = await this.prisma.supplier.update({
			where: { id },
			data: updatedSupplierData,
		});

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { password, ...supplierDataWithoutPassword } = updatedSupplier;

		return supplierDataWithoutPassword;
	}

	async remove(id: string) {
		const supplier = await this.prisma.supplier.findUnique({
			where: { id },
		});

		if (!supplier) {
			throw new NotFoundException(`Supplier with ID ${id} not found`);
		}

		await this.prisma.supplier.delete({ where: { id } });

		return `Supplier with ID ${id} has been successfully deleted`;
	}
}
