import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskEntity } from '@src/tasks/entities/task.entity';
import { CreateTaskInput } from '@src/tasks/inputs/create-task.input';
import { UpdateTaskInput } from '@src/tasks/inputs/update-task.input';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,
  ) {}

  async createTask(createTaskInput: CreateTaskInput): Promise<TaskEntity> {
    const task = await this.taskRepository.save({ ...createTaskInput });

    return task;
  }

  async getOneTask(id: number): Promise<TaskEntity> {
    const task = await this.taskRepository.findOne({ id });

    return task;
  }

  async getAllTasks(): Promise<TaskEntity[]> {
    return await this.taskRepository.find();
  }

  async removeTask(id: number): Promise<number> {
    await this.taskRepository.delete({ id });

    return id;
  }

  async updateTask(updateTaskInput: UpdateTaskInput): Promise<TaskEntity> {
    await this.taskRepository.update(
      { id: updateTaskInput.id },
      { ...updateTaskInput },
    );

    return await this.getOneTask(updateTaskInput.id);
  }
}
