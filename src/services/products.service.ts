import { Injectable, NotFoundException } from '@nestjs/common';
import path from 'path/posix';
import { Product } from './../entities/product.entity';
@Injectable()
export class ProductsService {
  private counterId = 6;
  private products: Product[] = [
    {
      id: 1,
      name: 'Prod 1',
      description: 'pla bla blo',
      price: 567.21,
      stock: 3,
      image: 'adasds',
    },
    {
      id: 2,
      name: 'Prod 3',
      description: 'pla bla blo',
      price: 567.21,
      stock: 3,
      image: 'asdsada',
    },
    {
      id: 5,
      name: 'Prod 2',
      description: 'pla bla blo',
      price: 567.21,
      stock: 3,
      image: 'adasasdasdds',
    },
  ];
  findAll() {
    return this.products;
  }
  findOne(id: number) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new NotFoundException(`Product ${id} not found`);
    }
    return product;
  }
  create(payload) {
    this.counterId += 1;
    const newProd: Product = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProd);
    return newProd;
  }
  update(id: number, payload: any) {
    this.products = this.products.map((prod) => {
      if (prod.id == id) {
        return {
          id,
          ...payload,
        };
      }
      return prod;
    });
    return this.products;
  }
  delete(id) {
    const index = this.products.findIndex((prod) => prod.id == id);
    if (index === -1) {
      throw new NotFoundException('Producto no encontrado');
    }
    return this.products.filter((prod) => prod.id != id);
  }
}
