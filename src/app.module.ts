import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlbumModule } from './album/album.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule,
    AlbumModule,
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      port: 5432,
      username:'postgres',
      password: 'root',
      database:'disquera',
      autoLoadEntities: true,
      synchronize: true,
      dropSchema: true,

    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
