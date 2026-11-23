import { Test, TestingModule } from '@nestjs/testing';
import { HrStaffService } from './hr-staff.service.js';

describe('HrStaffService', () => {
  let service: HrStaffService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HrStaffService],
    }).compile();

    service = module.get<HrStaffService>(HrStaffService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
