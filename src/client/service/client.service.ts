import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClientDto, UpdateClientDto } from '@client/dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { IClient } from '@client/interfaces';
import * as bcrypt from 'bcrypt';

@Injectable()
export default class ClientService {
	constructor(private readonly prisma: PrismaService) {}

	async findAll() {
		const allClients = await this.prisma.client.findMany();
		const clientsWithoutPasswords = allClients.map(
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			({ password, ...client }) => client,
		);
		return clientsWithoutPasswords;
	}

	async findOne(id: string) {
		const client = await this.prisma.client.findUnique({
			where: { id },
		});

		if (!client) {
			throw new NotFoundException(`Client with ID ${id} not found`);
		}

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { password, ...clientWithoutPassword } = client;
		return clientWithoutPassword;
	}

	async create(createClientDto: CreateClientDto): Promise<IClient> {
		const hashedPassword = await bcrypt.hash(createClientDto.password, 10);

		const checkEmail = await this.prisma.client.findUnique({
			where: { email: createClientDto.email },
		});

		if (checkEmail) {
			throw new NotFoundException(
				`Client with email ${createClientDto.email} already exists`,
			);
		}

		const clientData = {
			...createClientDto,
			password: hashedPassword,
			createdAt: new Date(),
			updatedAt: new Date(),
		};

		const createdClient = await this.prisma.client.create({ data: clientData });

		return {
			...createdClient,
			password: undefined,
		};
	}

	async update(id: string, updateClientDto: UpdateClientDto) {
		const updatedClientData = { ...updateClientDto };

		if (updateClientDto.password) {
			const hashedPassword = await bcrypt.hash(updateClientDto.password, 10);
			updatedClientData.password = hashedPassword;
		}

		const client = await this.prisma.client.findUnique({
			where: { id },
		});

		if (!client) {
			throw new NotFoundException(`Client with ID ${id} not found`);
		}

		const updatedClient = await this.prisma.client.update({
			where: { id },
			data: updatedClientData,
		});

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { password, ...clientDataWithoutPassword } = updatedClient;

		return clientDataWithoutPassword;
	}

	async remove(id: string) {
		const client = await this.prisma.client.findUnique({
			where: { id },
		});

		if (!client) {
			throw new NotFoundException(`Client with ID ${id} not found`);
		}

		await this.prisma.client.delete({ where: { id } });

		return `Client with ID ${id} has been successfully deleted`;
	}
}
