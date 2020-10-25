import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common';
import { MovieRepository } from 'src/common/repository';
import { MovieController } from './controller/';
import { MovieService } from './service/';

@Module({
  imports: [CommonModule, TypeOrmModule.forFeature([MovieRepository])],
  controllers: [MovieController],
  providers: [MovieService]
})
export class MovieModule {}
