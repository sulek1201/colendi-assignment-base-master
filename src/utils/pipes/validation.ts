import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { RequestValidationException } from '@utils/errors';

@Injectable()
export class CustomValidationPipe implements PipeTransform {
  async transform(value: unknown, { metatype }: ArgumentMetadata): Promise<unknown> {
    try {
      if (!metatype || !this.toValidate(metatype)) {
        return value;
      }
      const object = plainToClass(metatype, value);
      const errors = await validate(object);
      if (errors.length > 0) {
        const validationErrors: string[] = [];
        errors.forEach(err =>
          Object.keys(err.constraints).forEach(key => validationErrors.push(err.constraints[key])),
        );
        throw new RequestValidationException(validationErrors);
      }
      return value;
    } catch (error) {
      throw error;
    }
  }

  private toValidate(metatype: any): boolean {
    const types: any[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
