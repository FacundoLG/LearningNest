import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  HttpStatus,
  HttpCode,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { CreateProductDto } from '../dtos/products.dto';
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  @Get()
  @HttpCode(HttpStatus.ACCEPTED)
  getProducts(
    @Query('limit') limit = 20,
    @Query('offset') offset = 20,
    @Query('brand') brand = '',
  ) {
    // return {
    //   message: `| ${limit} | ${offset} | ${brand} |`,
    // };
    return this.productsService.findAll();
  }

  @Get('/:id')
  getProduct(@Param('id', ParseIntPipe) id: number) {
    // return {
    //   message: `las de ${id} son Zzz`,
    // };
    return this.productsService.findOne(id);
  }
  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }
  @Put(':id')
  upadate(@Param('id', ParseIntPipe) id: number, @Body() payload: any) {
    return this.productsService.update(id, payload);
  }
  @Delete(':id')
  deleteOne(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.delete(id);
  }
}
