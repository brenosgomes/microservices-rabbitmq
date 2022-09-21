import { Test, TestingModule } from '@nestjs/testing';
import { ProductsApiBController } from './products-api-b.controller';
import { ProductsApiBService } from './products-api-b.service';

describe('ProductsApiBController', () => {
  let controller: ProductsApiBController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsApiBController],
      providers: [ProductsApiBService],
    }).compile();

    controller = module.get<ProductsApiBController>(ProductsApiBController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
