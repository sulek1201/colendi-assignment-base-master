import { HttpException, HttpStatus } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import * as ErrorTypes from './types';

export class InvalidCredentialsException extends HttpException {
  constructor() {
    super(HttpException.createBody(ErrorTypes.InvalidCredentials), HttpStatus.FORBIDDEN);
  }
}
export class NotActivatedUserException extends HttpException {
  constructor() {
    super(HttpException.createBody(ErrorTypes.NotActivatedUser), HttpStatus.FORBIDDEN);
  }
}

export class RequestValidationException extends HttpException {
  constructor(message: ValidationError[] | string[]) {
    super(
      HttpException.createBody({ ...ErrorTypes.RequestValidation, message }),
      HttpStatus.BAD_REQUEST,
    );
  }
}

export class GenericHttpException extends HttpException {
  constructor(type: ErrorTypes.HttpErrorBody, statusCode: number = HttpStatus.BAD_REQUEST) {
    super(HttpException.createBody(type), statusCode);
  }
}
