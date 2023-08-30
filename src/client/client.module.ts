import { Module } from '@nestjs/common';
import PrismaModule from '@prisma/prisma.module';
import ClientController from '@client/controller/client.controller';
import ClientService from '@client/service/client.service';

@Module({
	imports: [PrismaModule],
	controllers: [ClientController],
	providers: [ClientService],
	exports: [ClientService],
})
export default class ClientModule {}
