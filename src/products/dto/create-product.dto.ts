// src/products/dto/create-product.dto.ts

import { IsNotEmpty, IsNumber, IsString, IsOptional, Min } from 'class-validator';
import { Type } from 'class-transformer'; // Esta es la línea a verificar y corregir

export class CreateProductDto {
  @IsNotEmpty({ message: 'El nombre es obligatorio y no puede estar vacío.' })
  @IsString({ message: 'El nombre debe ser una cadena de texto.' })
  name: string;

  @IsNotEmpty({ message: 'El precio es obligatorio.' })
  @IsNumber({}, { message: 'El precio debe ser un número.' })
  @Min(0.01, { message: 'El precio debe ser mayor a 0.' })
  @Type(() => Number) // Asegura que el valor se transforme a número
  price: number;

  @IsOptional()
  @IsString({ message: 'La descripción debe ser una cadena de texto.' })
  description?: string;
}