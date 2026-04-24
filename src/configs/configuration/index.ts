import { registerAs } from '@nestjs/config';
import { AppConfig } from './app-config.type';

export default registerAs<AppConfig>('app', () => {
  return {
    appName: process.env.APP_NAME || 'PLACHOLDER NAME',
    nodeEnv: process.env.NODE_ENV || 'development',
    port: Number(process.env.PORT) || 3000,
    version: process.env.VERSION || '1.0.0',
    description: process.env.DESCRIPTION || 'A NestJS practice project',
  };
});
