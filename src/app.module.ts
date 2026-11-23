
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

import { ApplicantsModule } from './applicants/applicants.module.js';
import { JobsModule } from './jobs/jobs.module.js';
import { AuthModule } from './auth/auth.module.js';
import { JobApplicationsModule } from './job-applications/job-applications.module.js';
import { DepartmentsModule } from './departments/departments.module.js';
import { HrStaffModule } from './hr-staff/hr-staff.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: Number(configService.get<string>('DB_PORT')),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        autoLoadEntities: true,
        synchronize: false,
      }),
    }),

    ApplicantsModule,
    JobsModule,
    AuthModule,
    JobApplicationsModule,
    DepartmentsModule,
    HrStaffModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
