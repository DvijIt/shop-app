import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TaskEntity } from './entities/task.entity';
import { TaskResolver } from './resolvers/task/task.resolver';
import { TaskService } from './services/task/tasks.service';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity])],
  providers: [TaskService, TaskResolver],
})
export class TasksModule {}
