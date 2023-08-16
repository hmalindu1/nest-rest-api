import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async getAllItems() {
    return this.itemsService.getAllItems();
  }

  @Post()
  async createItem(
    @Body() createItemDto: CreateItemDto,
  ): Promise<CreateItemDto> {
    return this.itemsService.createItem(createItemDto);
  }

  // @Get(':id')
  // findOne(@Param('id') id): Item {
  //   return this.itemsService.findOne(id);
  // }

  // @Post()
  // create(@Body() createItemDto: CreateItemDto): string {
  //   return `${createItemDto.name} created!`;
  // }

  // @Delete(':id')
  // delete(@Param('id') id): string {
  //   return `Item ${id} deleted!`;
  // }

  // @Put(':id')
  // update(@Param('id') id, @Body() updateItemDto: CreateItemDto): string {
  //   return `Item ${id} updated! ${updateItemDto.name}`;
  // }
}
