import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlbumModule } from './album/album.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Album } from './album/entities/album.entity';

@Module({
  imports: [
    TypeOrmModule,
    AlbumModule,
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      port: 5432,
      username:'postgres',
      password: 'Santi018',
      database:'nestjs',
      autoLoadEntities: true,
      synchronize: true,
      dropSchema: true,
      entities: [Album],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
