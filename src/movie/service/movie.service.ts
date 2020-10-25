import { Injectable } from '@nestjs/common';
import { MovieRepository } from 'src/common/repository';
import { MovieReqDto } from '../model';

@Injectable()
export class MovieService {
    public constructor(private readonly movieRepo: MovieRepository) {}


    createMovie(movieReqDto: MovieReqDto) {
        
    }

    getMovies() {
        return this.movieRepo.find({
            order: {
              regDt: 'ASC',
            },
          });
    }
}
