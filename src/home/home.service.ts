import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AllConfigType } from 'src/configs/configuration/config.type';

@Injectable()
export class HomeService {
  constructor(private readonly configService: ConfigService<AllConfigType>) {}
  appInfo(): object {
    return {
      name:
        this.configService.get('app.appName', { infer: true }) ||
        'NestJS Practice',
      version:
        this.configService.get('app.version', { infer: true }) || '1.0.0',
      description:
        this.configService.get('app.description', { infer: true }) ||
        'A NestJS practice project',
    };
  }
}
