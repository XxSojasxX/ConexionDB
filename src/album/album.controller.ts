import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlbumService } from './album.service';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Album } from './entities/album.entity';

@Controller('album')
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @Post()
  create(@Body() createAlbumDto: CreateAlbumDto) {
    return this.albumService.create(createAlbumDto);
  }

  // @Get()
  // findAll() {
  //   return this.albumService.findAll();
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.albumService.findOne(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAlbumDto: UpdateAlbumDto) {
  //   return this.albumService.update(+id, updateAlbumDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.albumService.delete(id);
  }
}
