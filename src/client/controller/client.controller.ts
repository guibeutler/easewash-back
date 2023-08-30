import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from '@nestjs/common';
import ClientService from '@client/service/client.service';
import { CreateClientDto, UpdateClientDto } from '@client/dto';
import { ApiHeader, ApiTags } from '@nestjs/swagger';

@ApiTags('client')
@Controller('client')
export default class ClientController {
	constructor(private readonly clientService: ClientService) {}

	@ApiHeader({
		name: 'Authorization',
		description: 'Bearer token',
		required: true,
	})
	@Post()
	create(@Body() createClientDto: CreateClientDto) {
		return this.clientService.create(createClientDto);
	}

	@ApiHeader({
		name: 'Authorization',
		description: 'Bearer token',
		required: true,
	})
	@Get()
	findAll() {
		return this.clientService.findAll();
	}

	@ApiHeader({
		name: 'Authorization',
		description: 'Bearer token',
		required: true,
	})
	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.clientService.findOne(id);
	}

	@ApiHeader({
		name: 'Authorization',
		description: 'Bearer token',
		required: true,
	})
	@Patch(':id')
	update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
		return this.clientService.update(id, updateClientDto);
	}

	@ApiHeader({
		name: 'Authorization',
		description: 'Bearer token',
		required: true,
	})
	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.clientService.remove(id);
	}
}
