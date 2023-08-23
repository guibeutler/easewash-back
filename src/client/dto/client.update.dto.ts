import { PartialType } from '@nestjs/mapped-types';
import { CreateClientDto } from '@client/dto';

export default class UpdateClientDto extends PartialType(CreateClientDto) {
	id: string;
	name: string;
	email: string;
	password: string;
}
