import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SchedulesModule } from './schedules/schedules.module';
import { DatabaseProviderModule } from './database-provider/database-provider.module';

@Module({
  imports: [UsersModule, SchedulesModule, DatabaseProviderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
