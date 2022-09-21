import { Test, TestingModule } from '@nestjs/testing';
import { ProductsApiAController } from './products-api-a.controller';
import { ProductsApiAService } from './products-api-a.service';

describe('ProductsApiAController', () => {
  let controller: ProductsApiAController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsApiAController],
      providers: [ProductsApiAService],
    }).compile();

    controller = module.get<ProductsApiAController>(ProductsApiAController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
