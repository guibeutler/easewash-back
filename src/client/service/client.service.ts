import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClientDto, UpdateClientDto } from '@client/dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { IClient } from '@client/interfaces';
import * as bcrypt from 'bcrypt';

@Injectable()
export default class ClientService {
	constructor(private readonly prisma: PrismaService) {}

	async create(createClientDto: CreateClientDto): Promise<IClient> {
		const hashedPassword = await bcrypt.hash(createClientDto.password, 10);

		const data = {
			...createClientDto,
			password: hashedPassword,
			createdAt: new Date(),
			updatedAt: new Date(),
		};

		const createdClient = await this.prisma.client.create({ data });

		return {
			...createdClient,
			password: undefined,
		};
	}

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

	update(id: number, updateClientDto: UpdateClientDto) {
		return `This action updates a #${id} client ${updateClientDto.name}`;
	}

	remove(id: number) {
		return `This action removes a #${id} client`;
	}
}
