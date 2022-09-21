import { Controller, Get } from '@nestjs/common';
import { ApiPrimaryService } from './api-primary.service';

@Controller()
export class ApiPrimaryController {
  constructor(private readonly apiPrimaryService: ApiPrimaryService) {}

  @Get()
  getHello(): string {
    return this.apiPrimaryService.getHello();
  }
}
