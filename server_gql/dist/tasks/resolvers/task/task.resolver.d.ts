import { TaskEntity } from 'src/tasks/entities/task.entity';
import { CreateTaskInput } from 'src/tasks/inputs/create-task.input';
import { UpdateTaskInput } from 'src/tasks/inputs/update-task.input';
import { TaskService } from 'src/tasks/services/task/tasks.service';
export declare class TaskResolver {
    private readonly taskService;
    constructor(taskService: TaskService);
    createTask(createTaskInput: CreateTaskInput): Promise<TaskEntity>;
    updateTask(updateTaskInput: UpdateTaskInput): Promise<TaskEntity>;
    removeTask(id: number): Promise<number>;
    getOneTask(id: number): Promise<TaskEntity>;
    getAllTasks(): Promise<TaskEntity[]>;
}
