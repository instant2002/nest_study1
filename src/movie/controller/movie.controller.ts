import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { MovieReqDto } from '../model';
import { MovieService } from '../service/'

@Controller('movies')
export class MovieController {
    private readonly logger = new Logger(MovieController.name, true);

    constructor(private readonly movieService: MovieService) {}

    @Post()
    createMovie(@Body() movieReqDto: MovieReqDto) {
        this.logger.debug('createMovies');
        // return this.movieService.createMovie();
    }
    
    @Get()
    getMovies() {
        this.logger.debug('getMovies');
        return this.movieService.getMovies();
    }
}
