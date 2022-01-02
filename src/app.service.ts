import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getApiMessage(): any {
    return 'Colendi API';
  }
}
