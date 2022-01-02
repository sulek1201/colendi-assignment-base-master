import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export interface ApplicationData {
  clientid: string;
  clientsecret: string;
  applicationId?: string;
  applicationName?: string;
}

export const GetUser = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request: Request = ctx.switchToHttp().getRequest();
  return request['user'];
});

export const GetApplication = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): ApplicationData => {
    const request: Request = ctx.switchToHttp().getRequest();
    const clientid = request.headers['clientid'] as string;
    const clientsecret = request.headers['clientsecret'] as string;
    const applicationId = request['applicationId'];
    const applicationName = request['applicationName'];
    return { clientid, clientsecret, applicationId, applicationName };
  },
);
