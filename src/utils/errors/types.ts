export interface HttpErrorBody {
  errorCode: number;
  message: string | [];
}

export const Authorization: HttpErrorBody = {
  errorCode: 10401,
  message: 'Authorization',
};

export const InvalidCredentials: HttpErrorBody = {
  errorCode: 10402,
  message: 'Invalid Credentials',
};

export const NotActivatedUser: HttpErrorBody = {
  errorCode: 10404,
  message: 'User Not activated',
};

export const Forbidden: HttpErrorBody = {
  errorCode: 10403,
  message: 'Forbidden',
};

export const UserNotFound: HttpErrorBody = {
  errorCode: 10406,
  message: 'User not found',
};

export const MigrationNotAllowed: HttpErrorBody = {
  errorCode: 10407,
  message: 'Migration not allowed for this user.',
};

export const RequestValidation: HttpErrorBody = {
  errorCode: 10001,
  message: '',
};

