import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const API_DEFAULT_PORT = 4000;
const API_DEFAULT_PREFIX = '/api/v1/';

const SWAGGER_TITLE = 'Mavenir API';
const SWAGGER_DESCRIPTION = 'API used for Mavenir management';
const SWAGGER_PREFIX = '/docs';
const logger = new Logger('SERVER', true);

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  // app.setGlobalPrefix(API_DEFAULT_PREFIX);
  
  await app.listen(process.env.API_PORT || API_DEFAULT_PORT);
}
bootstrap();
