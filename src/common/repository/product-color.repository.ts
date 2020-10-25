import { EntityRepository, Repository } from 'typeorm';
import { TblMovie } from '../entities';

@EntityRepository(TblMovie)
export class MovieRepository extends Repository<TblMovie> {}
