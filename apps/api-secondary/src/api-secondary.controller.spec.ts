import { Test, TestingModule } from '@nestjs/testing';
import { ApiSecondaryController } from './api-secondary.controller';
import { ApiSecondaryService } from './api-secondary.service';

describe('ApiSecondaryController', () => {
  let apiSecondaryController: ApiSecondaryController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ApiSecondaryController],
      providers: [ApiSecondaryService],
    }).compile();

    apiSecondaryController = app.get<ApiSecondaryController>(ApiSecondaryController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(apiSecondaryController.getHello()).toBe('Hello World!');
    });
  });
});
