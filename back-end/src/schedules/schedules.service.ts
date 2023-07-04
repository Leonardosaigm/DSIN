import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { Schedules } from './entities/schedule.entity';



@Injectable()
export class SchedulesService {

  constructor(
    @InjectModel(Schedules)
    private scheduleModel: typeof Schedules,
  ) {}

  create(createScheduleDto: CreateScheduleDto) {
    console.log(createScheduleDto)
    return this.scheduleModel.create({...createScheduleDto})
  }

  findAll() {
    return this.scheduleModel.findAll();
  }

  findOne(id: string) {
    return this.scheduleModel.findOne({where: {id}});
  }

  findByUserId(id: string) {
    return this.scheduleModel.findAll({where:{idFromUserTable: id}});
  }


  update(id: string, updateScheduleDto: UpdateScheduleDto) {
    return this.scheduleModel.update({...updateScheduleDto}, {where: {id}});
  }

  remove(id: string) {
    return this.scheduleModel.destroy({where: {id}});
  }
}
