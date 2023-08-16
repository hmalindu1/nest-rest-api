import { Injectable } from '@nestjs/common';
import { Item as ItemModal } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { CreateItemDto } from './dto/create-item.dto';

@Injectable()
export class ItemsService {
  constructor(private prisma: PrismaService) {}

  // findAll(): ItemModal[] {
  //   return this.items;
  // }

  // findOne(id: string): ItemModal {
  //   return this.items.find((item) => item.id === id);
  // }

  async getAllItems(): Promise<ItemModal[]> {
    return await this.prisma.item.findMany();
  }

  async createItem(createItemDto: CreateItemDto): Promise<ItemModal> {
    return await this.prisma.item.create({ data: createItemDto });
  }
}
