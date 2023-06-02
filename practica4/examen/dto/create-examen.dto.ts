import { IsNotEmpty, IsString } from "class-validator";

export class CreateExamenDto {
    @IsString()
    @IsNotEmpty()
    identificacion:string;

    @IsString()
    @IsNotEmpty()
    descripcion:string;
}
