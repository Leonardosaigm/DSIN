import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Schedules } from 'src/schedules/entities/schedule.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
    imports: [
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '234',
            database: 'database_development',
            models: [User, Schedules],
            }),]
    , exports: [SequelizeModule]
})
export class DatabaseProviderModule { }
