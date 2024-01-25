import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://georgeu2021:ferari50@cluster0.ydnvsrm.mongodb.net/taskdb?retryWrites=true&w=majority'),
    TasksModule],
})
export class AppModule {}
