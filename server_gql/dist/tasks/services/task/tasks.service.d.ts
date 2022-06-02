import { Repository } from 'typeorm';
import { TaskEntity } from '@src/tasks/entities/task.entity';
import { CreateTaskInput } from '@src/tasks/inputs/create-task.input';
import { UpdateTaskInput } from '@src/tasks/inputs/update-task.input';
export declare class TaskService {
    private readonly taskRepository;
    constructor(taskRepository: Repository<TaskEntity>);
    createTask(createTaskInput: CreateTaskInput): Promise<TaskEntity>;
    getOneTask(id: number): Promise<TaskEntity>;
    getAllTasks(): Promise<TaskEntity[]>;
    removeTask(id: number): Promise<number>;
    updateTask(updateTaskInput: UpdateTaskInput): Promise<TaskEntity>;
}
