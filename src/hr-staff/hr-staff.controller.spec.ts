import { Test, TestingModule } from '@nestjs/testing';
import { HrStaffController } from './hr-staff.controller.js';

describe('HrStaffController', () => {
  let controller: HrStaffController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HrStaffController],
    }).compile();

    controller = module.get<HrStaffController>(HrStaffController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
