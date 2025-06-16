// src/products/products.controller.ts

import { Controller, Post, Get, Body, Param, ParseIntPipe, UsePipes, ValidationPipe, HttpStatus } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, errorHttpStatusCode: HttpStatus.BAD_REQUEST }))
  async create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  @Get() // Endpoint extra para obtener todos los productos
  async findAll() {
    return this.productsService.findAll();
  }
}