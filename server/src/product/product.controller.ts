import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { sortType } from './sort.type';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll(@Query('sortType') type?: sortType) {
    return this.productService.findAll(type);
  }

  @Get('search')
  async bySearchTerm(@Query('serchTerm') serchTerm?: string) {
    return this.productService.bySearchTerm(serchTerm);
  }

  @Get('/slug/:slug')
  async findBySlug(@Param('slug') slug: string) {
    return this.productService.findBySlug(slug);
  }

  @Get('/relatives/:id')
  async findRelative(@Param('id') id: string) {
    return this.productService.findRelative(+id);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.productService.findById(+id);
  }
}
