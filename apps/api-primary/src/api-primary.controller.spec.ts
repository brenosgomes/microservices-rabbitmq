import { Test, TestingModule } from '@nestjs/testing';
import { ApiPrimaryController } from './api-primary.controller';
import { ApiPrimaryService } from './api-primary.service';

describe('ApiPrimaryController', () => {
  let apiPrimaryController: ApiPrimaryController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ApiPrimaryController],
      providers: [ApiPrimaryService],
    }).compile();

    apiPrimaryController = app.get<ApiPrimaryController>(ApiPrimaryController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(apiPrimaryController.getHello()).toBe('Hello World!');
    });
  });
});
