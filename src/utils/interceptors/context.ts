import { User } from '@entities/user';
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { ValidationArguments } from 'class-validator';
import { Observable } from 'rxjs';

/**
 * Injects request data into the context, so that the ValidationPipe can use it.
 */
@Injectable()
export class ContextInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();

    request.body.context = {
      user: request.user,
    };

    return next.handle();
  }
}

export const getUserFromContext = (args: ValidationArguments): User => {
  return (args.object as any).context.user;
};
