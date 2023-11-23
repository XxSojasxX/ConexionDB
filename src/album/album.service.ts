import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Album } from './entities/album.entity';

@Injectable()
export class AlbumService {
  constructor(

    @InjectRepository(Album)

    private readonly AlbumRepository: Repository<Album>,

  ) { }

  async create(createAlbum: CreateAlbumDto) {

    const album = this.AlbumRepository.create(createAlbum);

    await this.AlbumRepository.save(album);

    return album;

  }
  ccreate(createAlbumDto: CreateAlbumDto) {
    return 'This action adds a new album';
  }

  async findOne(id:string) {
    const album = await this.AlbumRepository.findOne({ where: {id} });

    return album;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} album`;
  // }

  update(id: number, updateAlbumDto: UpdateAlbumDto) {
    return `This action updates a #${id} album`;
  }


  async delete(id: string) {
    let albums = await this.findOne(id);
    if (albums) {
      const album = this.AlbumRepository.delete({ id }); 
      return "OK";
    } else {
      return "No existe";
    }
  }
}
