import { Test, TestingModule } from '@nestjs/testing';
import { ProductsApiBService } from './products-api-b.service';

describe('ProductsApiBService', () => {
  let service: ProductsApiBService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsApiBService],
    }).compile();

    service = module.get<ProductsApiBService>(ProductsApiBService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
