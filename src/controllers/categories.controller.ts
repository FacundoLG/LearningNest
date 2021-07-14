import { Controller, Get,Param, Query } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {

    @Get()
    getCategories(@Query('name') name:any){
      return {
          message: `Toma las que tienen '${name}' en el nombre`
      }
    }
    @Get('/:id')
    getOne(@Param('id') id:any){
        return{
            message: `Toma la que tiene el id: ${id}`
        }
    }
}
