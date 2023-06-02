import { PartialType } from '@nestjs/mapped-types';
import { CreateExamenDto } from './create-examen.dto';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateExamenDto extends PartialType(CreateExamenDto) {
    @IsBoolean()
    @IsOptional()
    estado?: boolean;
}
