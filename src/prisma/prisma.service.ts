// src/prisma/prisma.service.ts

import { INestApplication, Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common'; // Agrega OnModuleDestroy
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy { // Implementa OnModuleDestroy
  async onModuleInit() {
    await this.$connect(); // Conecta Prisma cuando el módulo se inicializa
  }

  async onModuleDestroy() {
    await this.$disconnect(); // Desconecta Prisma cuando el módulo se destruye
  }

  
}