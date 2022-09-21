import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiPrimaryService {
  getHello(): string {
    return 'Hello World!';
  }
}
