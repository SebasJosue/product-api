// src/app.module.ts

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { PrismaModule } from './prisma/prisma.module'; // Importa PrismaModule

@Module({
  imports: [ProductsModule, PrismaModule], // Agrega ProductsModule y PrismaModule
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}