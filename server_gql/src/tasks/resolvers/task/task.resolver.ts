import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TaskEntity } from 'src/tasks/entities/task.entity';
import { CreateTaskInput } from 'src/tasks/inputs/create-task.input';
import { UpdateTaskInput } from 'src/tasks/inputs/update-task.input';
import { TaskService } from 'src/tasks/services/task/tasks.service';

@Resolver('Task')
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Mutation(() => TaskEntity)
  async createTask(
    @Args('createTask') createTaskInput: CreateTaskInput,
  ): Promise<TaskEntity> {
    return await this.taskService.createTask(createTaskInput);
  }

  @Mutation(() => TaskEntity)
  async updateTask(
    @Args('updateTask') updateTaskInput: UpdateTaskInput,
  ): Promise<TaskEntity> {
    return await this.taskService.updateTask(updateTaskInput);
  }

  @Mutation(() => Number)
  async removeTask(@Args('id') id: number): Promise<number> {
    return await this.taskService.removeTask(id);
  }

  @Query(() => TaskEntity)
  async getOneTask(@Args('id') id: number): Promise<TaskEntity> {
    return await this.taskService.getOneTask(id);
  }

  @Query(() => [TaskEntity])
  async getAllTasks(): Promise<TaskEntity[]> {
    return await this.taskService.getAllTasks();
  }
}
