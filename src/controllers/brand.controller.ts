import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('brands')
export class BrandController {
  @Get()
  getBrands(@Query('name') name: string) {
    return {
      message: `Toma las que tienen '${name}' en el nombre`,
    };
  }
  @Get('/:id')
  getOne(@Param('id') id: any) {
    return {
      message: `Toma la que tiene el id: ${id} `,
    };
  }
}
