import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { AuthRequest } from '@auth/models';
import { IClient } from '@client/interfaces';
import { ISupplier } from '@supplier/interfaces';

export const CurrentUser = createParamDecorator(
	(data: unknown, context: ExecutionContext): IClient | ISupplier => {
		const request = context.switchToHttp().getRequest<AuthRequest>();

		return request.user;
	},
);
