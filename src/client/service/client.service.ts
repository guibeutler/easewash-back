import { Injectable } from '@nestjs/common';
import { CreateClientDto, UpdateClientDto } from '@client/dto';

@Injectable()
export default class ClientService {
	create(createClientDto: CreateClientDto) {
		return `This action adds a new client ${createClientDto.name}`;
	}

	findAll() {
		return `This action returns all client`;
	}

	findOne(id: number) {
		return `This action returns a #${id} client`;
	}

	update(id: number, updateClientDto: UpdateClientDto) {
		return `This action updates a #${id} client ${updateClientDto.name}`;
	}

	remove(id: number) {
		return `This action removes a #${id} client`;
	}
}
