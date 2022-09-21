import { Controller, Get } from '@nestjs/common';
import { ApiSecondaryService } from './api-secondary.service';

@Controller()
export class ApiSecondaryController {
  constructor(private readonly apiSecondaryService: ApiSecondaryService) {}

  @Get()
  getHello(): string {
    return this.apiSecondaryService.getHello();
  }
}
