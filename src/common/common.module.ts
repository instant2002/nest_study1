import { HttpModule, Module } from '@nestjs/common';
import { configProvider, LoggerService } from './provider';

@Module({
  imports: [
    HttpModule,
  ],
  providers: [
    configProvider,
    LoggerService,
  ],
  exports: [configProvider, LoggerService],
})
export class CommonModule {}
