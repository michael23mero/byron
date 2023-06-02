import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateExamenDto } from './dto/create-examen.dto';
import { UpdateExamenDto } from './dto/update-examen.dto';
import { Examen } from './entities/examen.entity';

@Injectable()
export class ExamenService {

  private examens: Examen[] = [
    {
      id:1, identificacion:'101' , descripcion: 'Examen Parcial', estado:true
    },
    {
      id:2, identificacion:'202' , descripcion: 'Examen Final', estado:true
    },
  ]

  create(createEstudianteDto: CreateExamenDto) {
    const examen = new Examen();
    examen.id=  Math.max( ... this.examens.map(elemento => elemento.id),0 )+1 ;
    examen.descripcion= createEstudianteDto.descripcion;
    this.examens.push(examen);
    return examen;
  }

  findAll() : Examen[] {
    return this.examens;
  }

  findOne(id: number) {
    const examen =  this.examens.find(examen=> examen.id===id);
    if (!examen) throw new NotFoundException(`ID ${id} not found`)
    return examen;
  }

  update(id: number, updateExamenDto: UpdateExamenDto) {
    const { identificacion, descripcion } = updateExamenDto;
    const examen = this.findOne(id);
    if (identificacion) examen.identificacion = identificacion;
    if (descripcion) examen.descripcion = descripcion;

    this.examens =  this.examens.map( elemento=> {
      if (elemento.id===id) return examen;
      return elemento;
    } )

    return examen;

  }

  remove(id: number) {
    this.findOne(id);
    this.examens =  this.examens.filter(elemento=> elemento.id!== id);
  }
}
