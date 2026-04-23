import { Injectable } from '@nestjs/common';
import { LoggerService } from './configs/logger/logger.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  appName: string = '';
  constructor(
    private myLogger: LoggerService,
    private configService: ConfigService,
  ) {
    this.myLogger.setContext('MAIN APP SERVICE');
    this.appName = this.configService.get<string>('appName')!;
  }
  getHello(): string {
    this.myLogger.log(`Hello World! App name is: ${this.appName}`);
    return 'Hello World!';
  }
}
