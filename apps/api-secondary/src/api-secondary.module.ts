import { Module } from '@nestjs/common';
import { ApiSecondaryController } from './api-secondary.controller';
import { ApiSecondaryService } from './api-secondary.service';

@Module({
  imports: [],
  controllers: [ApiSecondaryController],
  providers: [ApiSecondaryService],
})
export class ApiSecondaryModule {}
