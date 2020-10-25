import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import * as _ from 'lodash';
import { env } from 'process';
import {
  TblMovie
} from '../../entities';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  public createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: `${env.TYPEORM_HOST}`,
      port: _.toNumber(env.TYPEORM_PORT),
      username: `${env.TYPEORM_USERNAME}`,
      password: `${env.TYPEORM_PASSWORD}`,
      database: `${env.TYPEORM_DATABASE}`,
      charset: 'utf8mb4',
      synchronize: true,
      dateStrings: ['DATE', 'DATETIME'],
      debug: false,
      extra: { connectionLimit: 100, waitForConnections: false, timezone: '+0900' },
      entities: [
        TblMovie
      ],
    };
  }
}
