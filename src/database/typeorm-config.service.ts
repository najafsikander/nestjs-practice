import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { AllConfigType } from 'src/configs/configuration/config.type';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService<AllConfigType>) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type:
        this.configService.get('database.type', { infer: true }) || 'postgres',
      host:
        this.configService.get('database.host', { infer: true }) || 'localhost',
      port: this.configService.get('database.port', { infer: true }) || 5432,
      username:
        this.configService.get('database.username', { infer: true }) ||
        'postgres',
      password:
        this.configService.get('database.password', { infer: true }) ||
        'postgres',
      database:
        this.configService.get('database.database', { infer: true }) ||
        'postgres',
      synchronize:
        this.configService.get('database.synchronize', { infer: true }) || true,
      logging:
        this.configService.get('database.logging', { infer: true }) ||
        process.env.NODE_ENV !== 'production',
      logNotifications:
        this.configService.get('database.logNotifications', { infer: true }) ||
        process.env.NODE_ENV !== 'production',
      logger:
        this.configService.get('database.logger', { infer: true }) ||
        'advanced-console',
    } as TypeOrmModuleOptions;
  }
}
