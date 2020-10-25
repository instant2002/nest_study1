import { Controller, Get } from '@nestjs/common';
import { MovieService } from '../service/';

@Controller('movies')
export class MovieController {

    constructor(private readonly movieService: MovieService) {}
    @Get()
    getMovies() {
        return this.movieService.getMovies();
    }
}
