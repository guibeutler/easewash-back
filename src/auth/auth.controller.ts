import {
	Controller,
	HttpCode,
	HttpStatus,
	Post,
	UseGuards,
	Request,
} from '@nestjs/common';
import AuthService from '@auth/auth.service';
import { LocalAuthGuard } from '@auth/guards/local-auth.guard';
import { AuthRequest } from '@auth/models';
import { IsPublic } from '@auth/decorators/is-public.decorator';

@Controller()
export default class AuthController {
	constructor(private readonly authService: AuthService) {}

	@IsPublic()
	@Post('login')
	@HttpCode(HttpStatus.OK)
	@UseGuards(LocalAuthGuard)
	login(@Request() req: AuthRequest) {
		const userToken = this.authService.login(req.user);
		const redirectTo = req.user.role === 'supplier' ? 'supplier' : 'client';

		return {
			...userToken,
			redirectTo,
		};
	}
}
