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
} from '@nestjs/common';
import { ProductsService } from '../services/products.service';
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
  getProduct(@Param('id') id: any) {
    // return {
    //   message: `las de ${id} son Zzz`,
    // };
    return this.productsService.findOne(id);
  }
  @Post()
  create(@Body() payload) {
    return this.productsService.create(payload);
  }
  @Put(':id')
  upadate(@Param('id') id: any, @Body() payload: any) {
    return this.productsService.update(id, payload);
  }
  @Delete(':id')
  deleteOne(@Param('id') id: any) {
    return {
      message: `Producto con el id '${id}' eliminado`,
    };
  }
}
