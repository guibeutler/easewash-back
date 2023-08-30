import { IClient } from '@client/interfaces';
import { ISupplier } from '@supplier/interfaces';
import { Request } from 'express';

export interface AuthRequest extends Request {
	user: IClient | ISupplier;
}
