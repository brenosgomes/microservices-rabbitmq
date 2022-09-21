import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiSecondaryService {
  getHello(): string {
    return 'Hello World!';
  }
}
