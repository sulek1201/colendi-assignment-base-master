import * as moment from 'moment';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint()
export class IsBeforeDate implements ValidatorConstraintInterface {
  validate(value: Date, args: ValidationArguments): boolean {
    return moment(value) < moment(args.constraints[0]);
  }

  defaultMessage(args: ValidationArguments): string {
    return `${args.property} must be before ${moment(args.constraints[0]).format('YYYY-MM-DD')}`;
  }
}

@ValidatorConstraint()
export class IsAfterDate implements ValidatorConstraintInterface {
  validate(value: Date, args: ValidationArguments): boolean {
    return moment(value) > moment(args.constraints[0]);
  }

  defaultMessage(args: ValidationArguments): string {
    return `${args.property} must be after ${moment(args.constraints[0]).format('YYYY-MM-DD')}`;
  }
}
