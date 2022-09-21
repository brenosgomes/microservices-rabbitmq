import { Test, TestingModule } from '@nestjs/testing';
import { ProductsApiAService } from './products-api-a.service';

describe('ProductsApiAService', () => {
  let service: ProductsApiAService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsApiAService],
    }).compile();

    service = module.get<ProductsApiAService>(ProductsApiAService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
