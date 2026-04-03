import { Injectable, Logger } from '@nestjs/common';
import { LoggerService } from './configs/logger/logger.service';

@Injectable()
export class AppService {
  constructor(private myLogger: LoggerService) {
    this.myLogger.setContext('MAIN APP SERVICE');
  }
  getHello(): string {
    this.myLogger.log('Hello World!');
    return 'Hello World!';
  }
}
