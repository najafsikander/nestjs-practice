import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { LoggerModule } from './configs/logger/logger.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './configs/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from './database/config/database.config';
import { TypeOrmConfigService } from './database/typeorm-config.service';
import { DataSource, DataSourceOptions } from 'typeorm';
import { HomeModule } from './home/home.module';

@Module({
  imports: [
    LoggerModule,
    //Applying RateLimitter
    ThrottlerModule.forRoot([
      {
        name: 'short',
        ttl: 1000,
        limit: 3,
      },
      {
        name: 'medium',
        ttl: 10000,
        limit: 20,
      },
      {
        name: 'long',
        ttl: 60000,
        limit: 100,
      },
    ]),
    //Loading Configuration
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      load: [configuration, databaseConfig],
      envFilePath: ['.env'],
    }),
    //Database Configuration
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
      dataSourceFactory: async (options: DataSourceOptions) => {
        return new DataSource(options).initialize();
      },
    }),
    HomeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
