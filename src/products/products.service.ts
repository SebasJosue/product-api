// src/products/products.service.ts

import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    const { name } = createProductDto;
    const existingProduct = await this.prisma.product.findUnique({
      where: { name },
    });

    if (existingProduct) {
      throw new ConflictException(`El producto con el nombre '${name}' ya existe.`);
    }

    // Asegurarse de que el precio se guarda como Decimal en la base de datos
    return this.prisma.product.create({
      data: {
        ...createProductDto,
        price: parseFloat(createProductDto.price.toString()),
      },
    });
  }

  async findOne(id: number) {
    const product = await this.prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException(`Producto con ID '${id}' no encontrado.`);
    }
    return product;
  }

  async findAll() {
    return this.prisma.product.findMany();
  }
}