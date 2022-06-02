"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const task_entity_1 = require("../../entities/task.entity");
const create_task_input_1 = require("../../inputs/create-task.input");
const update_task_input_1 = require("../../inputs/update-task.input");
const tasks_service_1 = require("../../services/task/tasks.service");
let TaskResolver = class TaskResolver {
    constructor(taskService) {
        this.taskService = taskService;
    }
    async createTask(createTaskInput) {
        return await this.taskService.createTask(createTaskInput);
    }
    async updateTask(updateTaskInput) {
        return await this.taskService.updateTask(updateTaskInput);
    }
    async removeTask(id) {
        return await this.taskService.removeTask(id);
    }
    async getOneTask(id) {
        return await this.taskService.getOneTask(id);
    }
    async getAllTasks() {
        return await this.taskService.getAllTasks();
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => task_entity_1.TaskEntity),
    __param(0, (0, graphql_1.Args)('createTask')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_task_input_1.CreateTaskInput]),
    __metadata("design:returntype", Promise)
], TaskResolver.prototype, "createTask", null);
__decorate([
    (0, graphql_1.Mutation)(() => task_entity_1.TaskEntity),
    __param(0, (0, graphql_1.Args)('updateTask')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_task_input_1.UpdateTaskInput]),
    __metadata("design:returntype", Promise)
], TaskResolver.prototype, "updateTask", null);
__decorate([
    (0, graphql_1.Mutation)(() => Number),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TaskResolver.prototype, "removeTask", null);
__decorate([
    (0, graphql_1.Query)(() => task_entity_1.TaskEntity),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TaskResolver.prototype, "getOneTask", null);
__decorate([
    (0, graphql_1.Query)(() => [task_entity_1.TaskEntity]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TaskResolver.prototype, "getAllTasks", null);
TaskResolver = __decorate([
    (0, graphql_1.Resolver)('Task'),
    __metadata("design:paramtypes", [tasks_service_1.TaskService])
], TaskResolver);
exports.TaskResolver = TaskResolver;
//# sourceMappingURL=task.resolver.js.map