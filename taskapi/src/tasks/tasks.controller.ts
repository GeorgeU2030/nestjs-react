import { Controller, Get, Post,Put,Delete, Body, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { createTaskDTO } from 'src/dto/create-task.dto';
import { updateTaskDTO } from 'src/dto/update-task.dto';

@Controller('tasks')
export class TasksController {

    constructor(private taskService:TasksService) {}

    @Get()
    findAll() {
        return this.taskService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id:string) {
        return this.taskService.findOne(id);
    }

    @Post()
    create(@Body() body:createTaskDTO) {
        return this.taskService.create(body);
    }

    @Delete(':id')
    delete(@Param('id') id:string) {
        return this.taskService.delete(id);
    }

    @Put(':id')
    update(@Param('id') id:string, @Body() body:updateTaskDTO) {
        return this.taskService.update(id, body);
    }
}
