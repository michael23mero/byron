import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ExamenService } from './examen.service';
import { CreateExamenDto } from './dto/create-examen.dto';
import { UpdateExamenDto } from './dto/update-examen.dto';
import { Examen } from './entities/examen.entity';

@Controller('examen')
export class ExamenController {
  constructor(private readonly examenService: ExamenService) {}

  @Post()
  create(@Body() CreateExamenDto: CreateExamenDto) {
    return this.examenService.create(CreateExamenDto);
  }

  @Get()
  findAll() : Examen[] {
    return this.examenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.examenService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExmaneDto: UpdateExamenDto) {
    return this.examenService.update(+id, updateExmaneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.examenService.remove(+id);
  }
}
