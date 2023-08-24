import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from '@task/dto';

export default class UpdateTaskDto extends PartialType(CreateTaskDto) {}
