import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from '../schemas/task.schema';
import { Model } from 'mongoose';
import { createTaskDTO } from 'src/dto/create-task.dto';
import { updateTaskDTO } from 'src/dto/update-task.dto';

@Injectable()
export class TasksService {
    constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

    findAll(){
        this.taskModel.find();
    }

    async create(createTask:createTaskDTO){
        const newTask = new this.taskModel(createTask);
        return newTask.save()
    }

    async findOne(id:string){
        return this.taskModel.findById(id)
    }

    async delete(id:string){
        return this.taskModel.findByIdAndDelete(id)
    }

    async update(id:string, updateTask:updateTaskDTO){
        return this.taskModel.findByIdAndUpdate(id, updateTask)
    }
}
