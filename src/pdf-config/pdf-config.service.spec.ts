import { Test, TestingModule } from '@nestjs/testing';
import { PdfConfigService } from './pdf-config.service';

describe('PdfConfigService', () => {
  let service: PdfConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PdfConfigService],
    }).compile();

    service = module.get<PdfConfigService>(PdfConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
