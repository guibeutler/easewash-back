import {
	Controller,
	HttpCode,
	HttpStatus,
	Post,
	UseGuards,
	Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthRequest } from './models/AuthRequest';
import { IsPublic } from './decorators/is-public.decorator';

@Controller()
export class AuthController {
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
