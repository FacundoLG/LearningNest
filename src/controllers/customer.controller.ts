import { Controller, Get,Query,Param } from '@nestjs/common';

@Controller('customers')
export class CustomerController {
    @Get()
    getCustomers(@Query('name') name:any){
      return {
          message: `Toma los customers que tienen '${name}' en el nombre`
      }
    }
    @Get('/:id')
    getOne(@Param('id') id:any){
        return{
            message: `Toma la que tiene el id: ${id}`
        }
    }

}
