import { Module } from '@nestjs/common';
import { SchedulesService } from './schedules.service';
import { SchedulesController } from './schedules.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Schedules } from './entities/schedule.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([Schedules])
  ],
  controllers: [SchedulesController],
  providers: [SchedulesService]
})
export class SchedulesModule {}
