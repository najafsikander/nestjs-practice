import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { LoggerService } from './configs/logger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    bodyParser: true,
    bufferLogs: true,
  });

  app.use(helmet());
  app.useLogger(new LoggerService());
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
