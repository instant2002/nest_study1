import { Module } from '@nestjs/common';
import { MovieController } from './controller/';
import { MovieService } from './service/';

@Module({
  controllers: [MovieController],
  providers: [MovieService]
})
export class MovieModule {}
