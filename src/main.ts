import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { ConsoleLogger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    bodyParser: true,
    logger: new ConsoleLogger({
      prefix: 'NestJs-Practice',
      timestamp: true,
      logLevels: ['log', 'fatal', 'error', 'warn', 'debug', 'verbose'],
      compact: true,
    }),
  });

  app.use(helmet());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
