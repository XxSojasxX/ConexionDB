import { IsDateString, IsNotEmpty, IsNumberString, IsOptional, IsString, MinLength } from "class-validator";

export class CreateAlbumDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsDateString()
    @IsNotEmpty()
    lanzamiento: Date;

    @IsNumberString()
    @IsNotEmpty()
    @MinLength(1)
    pistas: number;

    @IsString()
    @IsNotEmpty()
    autor: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    disquera: string
}
