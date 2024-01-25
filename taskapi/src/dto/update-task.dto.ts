import { IsBoolean, IsOptional, IsString } from "class-validator"

export class updateTaskDTO {
    @IsString()
    @IsOptional()
    title?:string

    @IsString()
    @IsOptional()
    description?:string

    @IsBoolean()
    @IsOptional()
    done?:boolean
}