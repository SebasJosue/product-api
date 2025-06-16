// src/products/products.module.ts

import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaModule } from '../prisma/prisma.module'; // Importa PrismaModule

@Module({
  imports: [PrismaModule], // Agrega PrismaModule a los imports
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}