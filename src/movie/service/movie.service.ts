import { Injectable } from '@nestjs/common';

@Injectable()
export class MovieService {

    getMovies() {
        return "영화 리스트";
    }
}
