import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class CreateProductController {
  async handle(request: Request, response: Response) {
    const { name, barcode, price } = request.body;

    const product = await prismaClient.product.create({
      data: {
        barcode,
        name,
        price,
      },
    });

    return response.json(product);
  }
}
