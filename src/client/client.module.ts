import { Module } from '@nestjs/common';
import ClientController from './controller/client.controller';
import ClientService from './service/client.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
	imports: [PrismaModule],
	controllers: [ClientController],
	providers: [ClientService],
})
export class ClientModule {}
